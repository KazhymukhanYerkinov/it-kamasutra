import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  const sendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  }
  const updateNewMessageBody = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }
  return <Dialogs
    state = { state }
    sendMessage = { sendMessage }
    updateNewMessageBody = { updateNewMessageBody } />


}

export default DialogsContainer;