import { Dispatch } from "redux";
import { chatAPI, ChatMessageType } from "../api/chat-api";
import { BaseThunkType, InferActionsTypes } from "./redux-store";


let initialState = {
  messages: [] as ChatMessageType[]
}




const chatReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case 'chat/MESSAGES_RECEIVED':
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages]
      }
    default:
      return state
  }
}

export const actions = {
  messageReceived: (messages: ChatMessageType[]) => ({ type: 'chat/MESSAGES_RECEIVED', payload: { messages } } as const)
}


let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null

const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
      dispatch(actions.messageReceived(messages))
    }
  } 
  
  return _newMessageHandler
}



export const startMessagesListening = (): ThunkType => async (dispatch) => {
  chatAPI.start()
  chatAPI.subscribe( newMessageHandlerCreator(dispatch) )
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
  chatAPI.unsubscribe( newMessageHandlerCreator(dispatch) )
  chatAPI.stop();
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
  chatAPI.sendMessage(message)
} 

export default chatReducer;



export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type DispatchType = Dispatch<ActionsTypes>
type ThunkType =  BaseThunkType<ActionsTypes>