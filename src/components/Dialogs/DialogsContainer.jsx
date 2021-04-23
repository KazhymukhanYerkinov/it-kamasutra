import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import { actions } from '../../redux/dialogs-reducer';

import Dialogs from './Dialogs';





let mapStateTopProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapStateToDispatch = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(actions.sendMessageCreator(newMessageBody));
    }

  }
}

export default compose(
  connect(mapStateTopProps, mapStateToDispatch),
  withAuthRedirect,
)(Dialogs)
