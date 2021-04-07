const SEND_MESSAGE = 'SEND_MESSAGE';


type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}



let initialState = {
  dialogs: [
    { id: 1, name: 'Andrey' },
    { id: 2, name: 'Dimych' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Valera' },
    { id: 6, name: 'Viktor' },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' },
    { id: 6, message: 'Yaho' },
  ] as Array<MessageType>,
  newMessageBody: "",
}

const dialogsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: action.newMessageBody }],
        
      }
    }
    default:
      return state;
  } 
}

type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE
  newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;