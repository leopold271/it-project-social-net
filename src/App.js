import React from 'react';
import './App.css';
import { connect } from "react-redux";
import Navbar from './modules/Navbar/Navbar';
import News from "./modules/News/News";
import Music from "./modules/Music/Music";
import Settings from "./modules/Settings/Settings";
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import DialogsContainer from "./modules/Dialogs/DialogsContainer";
import UsersContainer from "./modules/Users/UsersContainer";
import ProfileContainer from "./modules/Profile/ProfileContainer";
import HeaderContainer from "./modules/Header/HeaderContainer";
import Login from "./modules/Login/Login";
import { initializeApp } from "./redux/appReducer";
import { compose } from "redux";
import Preloader from "./modules/Common/Preloader/preloader";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/reduxStore';


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <Router>
                <div className='app-wrapper'>
                    <HeaderContainer />
                    <Navbar />
                    <div className='app-wrapper-content'>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                        <Route path='/dialogs' render={() => <DialogsContainer />} />
                        <Route path='/news' render={() => <News />} />
                        <Route path='/music' render={() => <Music />} />
                        <Route path='/settings' render={() => <Settings />} />
                        <Route path='/users' render={() => <UsersContainer />} />
                        <Route path='/login' render={() => <Login />} />
                    </div>
                </div>
            </Router>
        );
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                <AppContainer />
            </React.StrictMode>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;