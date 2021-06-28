import React from 'react';
import User from './User'

import Paginator from '../Common/Paginator/Paginator';

const Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, ...props }) => {
    return <div>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
            onPageChanged={onPageChanged} />

        {
            props.users.map((u) =>
                <User user={u}
                    followingInProgress={props.followingInProgress}
                    deleteSubscription={props.deleteSubscription}
                    addSubscription={props.addSubscription} />
            )
        }
    </div>
};

export default Users;