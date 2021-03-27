import { connect } from 'react-redux';
import { compose } from 'redux';
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

export default compose(
  connect(mapStateTopProps, mapStateToDispatch),
  withAuthRedirect,
)(Dialogs)
