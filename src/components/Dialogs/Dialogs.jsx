import React from 'react';

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

import cls from './Dialogs.module.css';




const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs
    .map((dialog, index) => <DialogItem key={index} id={dialog.id} name={dialog.name} />);

  let messagesElement = props.state.messages
    .map((message, index) => <Message key={index} id={message.id} message={message.message} />);

  let newMessageBody = props.state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={cls.messages}>
        <div>
          {messagesElement}
        </div>
        <div>
          <div>
            <textarea 
              value = { newMessageBody }
              onChange = { onNewMessageChange } 
              placeholder = 'Enter your message'></textarea>
          </div>

          <div>
            <button onClick = { onSendMessageClick }> Send </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;