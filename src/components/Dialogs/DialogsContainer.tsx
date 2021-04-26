import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import { actions } from '../../redux/dialogs-reducer';
import { AppStateType } from '../../redux/redux-store';

import Dialogs from './Dialogs';


let mapStateTopProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

export default compose<React.ComponentType>(
  connect(mapStateTopProps, {...actions}),
  withAuthRedirect,
)(Dialogs)
