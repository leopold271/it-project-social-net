import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Redirect} from 'react-router-dom'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const maxLength300 = maxLengthCreator(300);

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <button> send</button>
            <Field name={'newMessageText'} placeholder={'write a message'} component={Textarea}
                   validate={[required, maxLength300]}/>
        </form>
    )
}

const DialogReduxForm = reduxForm({
    form: 'dialog'
})(DialogsForm)


const Dialogs = (props) => {

    let DialogDataNew = props.DialogPage.DialogData.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let MessageDataNew = props.DialogPage.MessageData.map((m) => <MessageItem messageText={m.text}/>);

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {DialogDataNew}
            </div>
            <div className={classes.messageItems}>
                {MessageDataNew}
            </div>
            <div>
                <DialogReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;