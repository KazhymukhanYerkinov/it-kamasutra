import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

import Dialogs from './Dialogs';





let mapStateTopProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
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


let WithAuthRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateTopProps, mapStateToDispatch)(WithAuthRedirectComponent);

export default DialogsContainer;