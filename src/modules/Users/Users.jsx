import React from 'react';
import classes from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/user.png';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setCurrentPage(response.data.page);
            });
    };

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return (
                            <span onClick={(e) => {
                                this.onPageChanged(p);
                            }} className={this.props.currentPage === p ? classes.selected : ''}>{p}</span>
                        )
                    })}
                </div>
                {
                    this.props.users.map((u) =>
                        <div >
                            <span>
                                <div>
                                    {/*<img src={userPhoto} className={classes.ava} alt='' />*/}
                                    <img src={u.photos.small !=null ? u.photos.small : userPhoto} className={classes.ava}/>
                                </div>
                                <div>
                                    {u.isFollowed
                                        ? <button onClick={() => {
                                            this.props.unFollow(u.id)
                                        }}> Unfollow </button>
                                        : <button onClick={() => {
                                            this.props.follow(u.id)
                                        }}> Follow </button>}
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>
                                        {u.name}
                                    </div>
                                    <div>
                                        {u.status}
                                    </div>
                                </span>
                                <span>
                                    <div>
                                        {'u.location.country'}
                                    </div>
                                    <div>
                                        {'u.location.city'}
                                    </div>
                                </span>
                            </span>
                        </div>
                    )

                }
            </div>
        )
    }
}


export default UsersAPIComponent;
