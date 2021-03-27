import { connect } from 'react-redux';

import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

import Dialogs from './Dialogs';





let mapStateTopProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}

let mapStateToDispatch = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },

    sendMessage: () => {
      dispatch(sendMessageCreator());
    }

  }
}

const DialogsContainer = connect(mapStateTopProps, mapStateToDispatch)(Dialogs);

export default DialogsContainer;