import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.loginedUserId;
        }
        if (!userId) {
            this.props.history.push('/login')
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        updateUserStatus={this.props.updateUserStatus}/>
    }
}


let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    loginedUserId: state.auth.id,
    isAuth: state.auth.isAuth
});


export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);

