import React from "react";
import classes from "../Dialogs.module.css";

const MessageItem = (props) => {
    return(
        <div className={classes.messageItem}>
            {props.messageText}
        </div>
    );
}

export default MessageItem;