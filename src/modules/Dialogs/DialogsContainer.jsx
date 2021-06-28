import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from '../../hoc/withAuthRedirect'
import {compose} from "redux";
import {addMessage} from "../../redux/dailogReducer";


let mapStateToProps = (state) => {
    return {
        DialogPage: state.DialogPage,
        newMessageText: state.DialogPage.newMessageText,
    };
}

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Dialogs)

