import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import profileReducer from "./profileReducer";
import dialogReducer from "./dailogReducer";
import recentFriendsReducer from "./recentFriendsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';


let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogPage: dialogReducer,
    RecentFriendsData: recentFriendsReducer,
    UsersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store;