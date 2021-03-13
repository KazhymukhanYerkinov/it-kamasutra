const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 7,
        message: state.newMessageBody,
      }
      state.newMessageBody = '';
      state.messages.push(newMessage);
      return state;

    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.newMessageBody;
      return state;
    
    default:
      return state;
  } 
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (newMessageBody) => ({ type: UPDATE_NEW_MESSAGE_BODY, newMessageBody });

export default dialogsReducer;