import React from 'react';





export type ChatMessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}

const ChatPage: React.FC = () => {
  return (
    <div>
      <Chat />
    </div>
  )
}

const Chat: React.FC = () => {

  const [ wsChanel, setWsChanel ] = React.useState<WebSocket | null>(null)


  React.useEffect(() => {
    let ws: WebSocket;

    const closeHandler = () => {
      console.log('CLOSE WS')
    }

    function createChannel() {
      ws?.removeEventListener('close', closeHandler)
      ws?.close()
    
      ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
      ws.addEventListener('close', closeHandler)

      setWsChanel(ws);
    }
    createChannel();

    return () => {
      ws.removeEventListener('close', closeHandler)
      ws.close()
    }
  }, [])

  

  return (
    <div>
      <Messages wsChanel = { wsChanel }/>
      <AddMessageForm wsChanel = { wsChanel }/>
    </div>
  )
}

const Messages: React.FC<{wsChanel: WebSocket | null}> = ({ wsChanel }) => {
  const [messages, setMessages] = React.useState<Array<ChatMessageType>>([]);

  React.useEffect(() => {
    const messageHandler = (e: MessageEvent) => {
      let newMessage = JSON.parse(e.data)
      setMessages((prevMessages) => [...prevMessages, ...newMessage])
    }
    wsChanel?.addEventListener('message', messageHandler)

    return () => {
      wsChanel?.removeEventListener('message', messageHandler)
    }

  }, [wsChanel])

  return (
    <div style = {{ height: '400px', overflowY: 'auto' }}>
      {messages.map((m, index) => <Message key = { index } message = { m } />)}
    </div>
  )
}

const Message: React.FC<{ message: ChatMessageType }> = ({ message }) => {
  return (
    <div>
      <img src = {message.photo} alt = '' /> <b> { message.userName } </b>
      <br />
      {message.message}
    </div>
  )
}

const AddMessageForm: React.FC<{ wsChanel: WebSocket | null }> = ({ wsChanel }) => {
  const [message, setMessage] = React.useState('');
  const [readyStatus, setReadyStatus] = React.useState<'pending' | 'ready'>('pending');



  React.useEffect(() => {
    const openHandler = () => {
      setReadyStatus('ready');
    }
    wsChanel?.addEventListener('open', openHandler)
    
    return () => {
      wsChanel?.removeEventListener('open', openHandler)
    }
  }, [wsChanel])


  const sendMessage = () => {
    if (!message) {
      return;
    }

    wsChanel?.send(message);
    setMessage('');
  }

  return (
    <div>
      <div>
        <textarea 
          onChange = {(e) => setMessage(e.currentTarget.value)} 
          value = { message }>
        </textarea>
      </div>

      <div>
        <button disabled = {wsChanel === null || readyStatus !== 'ready'} onClick = { sendMessage }> Send </button>
      </div>
    </div>
  )
}

export default ChatPage