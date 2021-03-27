import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import { getUserProfile } from '../../redux/profile-reducer';

import Profile from './Profile';




class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 11473;
        }
        this.props.getUserProfile(userId);
    }
    render() {
        return <Profile { ...this.props } profile = { this.props.profile } />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let WithAuthRedirectComponent = withAuthRedirect(ProfileContainer);
let WithUrlDataContainerComponent = withRouter(WithAuthRedirectComponent);
export default  connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);