import React from 'react';
import { connect } from 'react-redux';
import {
    addSubscription, deleteSubscription,
    follow, requestUsers,
    setCurrentPage,
    toggleIsFollowing,
    unFollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/preloader";
import { compose } from "redux";
import {
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                toggleIsFollowing={this.props.toggleIsFollowing}
                followingInProgress={this.props.followingInProgress}
                addSubscription={this.props.addSubscription}
                deleteSubscription={this.props.deleteSubscription} />
        </>
    }
}

let mapStateToProps = (state) => {
    console.log('usersRerendering')
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        toggleIsFollowing,
        addSubscription,
        deleteSubscription,
        requestUsers
    })
)(UsersContainer);

