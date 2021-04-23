import { InferActionsTypes } from "./redux-store";


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

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>


const dialogsReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'dialog/SEND_MESSAGE': {
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: action.newMessageBody }], 
      }
    }
    default:
      return state;
  } 
}

export const actions = {
  sendMessageCreator: (newMessageBody: string) => ({ type: 'dialog/SEND_MESSAGE', newMessageBody } as const)
}

export default dialogsReducer;