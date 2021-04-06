import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getStatus, getUserProfile, updateStatus, savePhoto } from '../../redux/profile-reducer';

import Profile from './Profile';




class ProfileContainer extends React.Component {

  refreshProfile = () => {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.authorizedUserId;

      if (!userId) {
        this.props.history.push('/login');
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    // console.log('RENDER PROFILE');
    return (
      <Profile
        {...this.props}
        isOwner = { !this.props.match.params.userId }
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto = {this.props.savePhoto}
      />
    )
  }
}

let mapStateToProps = (state) => {
  // console.log('mapStateToProps PROFILE')
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,

    authorizedUserId: state.authPage.userId,
    isAuth: state.authPage.isAuth
  }
}


export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer)
