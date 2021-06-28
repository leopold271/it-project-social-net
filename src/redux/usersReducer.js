import { userApi } from "../api/api";
import {updateObjInArr} from '../utils/objectHelpers';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    fake: 10
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjInArr(state.users, action.userId, 'id', {isFollowed: true })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjInArr(state.users, action.userId, 'id', {isFollowed: false })
            };
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
};

export const follow = (userId) => ({ type: 'FOLLOW', userId });
export const unFollow = (userId) => ({ type: 'UNFOLLOW', userId });
export const setUsers = (users) => ({ type: 'SET_USERS', users });
export const setCurrentPage = (currentPage) => ({ type: 'SET_CURRENT_PAGE', currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: 'SET_TOTAL_USERS_COUNT', count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: 'TOGGLE_IS_FETCHING', isFetching });
export const toggleIsFollowing = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const requestUsers = (requestedPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(requestedPage));
    let data = await userApi.getUsers(requestedPage, pageSize)

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const addOrDeleteSubscription = async (dispatch, userId, actionCreator, APIMethod) => {

    dispatch(toggleIsFollowing(true, userId));
    let response = await APIMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowing(false, userId));
}


export const addSubscription = (userId) => async (dispatch) => {
    let APIMethod = userApi.postSubscription.bind(userApi);
    let actionCreator = follow

    addOrDeleteSubscription(dispatch, userId, actionCreator, APIMethod);
}


export const deleteSubscription = (userId) => async (dispatch) => {
    let APIMethod = userApi.cancelSubscription.bind(userApi);
    let actionCreator = unFollow

    addOrDeleteSubscription(dispatch, userId, actionCreator, APIMethod);
}


export default usersReducer;