import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/store";


const Dialogs = (props) => {

    let DialogDataNew = props.DialogPage.DialogData.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let MessageDataNew = props.DialogPage.MessageData.map((m) => <MessageItem messageText={m.text}/>);

    let addMessage = () => {
        //props.addMessage();
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        //props.updateMessageText(text);
        props.dispatch(updateMessageTextActionCreator(text));
    }

    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {DialogDataNew}
            </div>
            <div className={classes.messageItems}>
                {MessageDataNew}
            </div>
            <div>
                <button onClick={addMessage}> write a message</button>
                <textarea onChange={onMessageChange} value={props.DialogPage.newMessageText}/>
            </div>
        </div>

    )
}

export default Dialogs;