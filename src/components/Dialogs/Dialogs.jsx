import React from 'react';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

import cls from './Dialogs.module.css';




const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map( (dialog, index) => <DialogItem key = { index } id = { dialog.id } name = { dialog.name }/> );

    let messagesElement = props.state.messages
        .map( (message, index) => <Message key = { index } id = { message.id } message = { message.message } /> );
    

    return (
        <div className = {cls.dialogs}>
            <div className = {cls.dialogsItems}>
                { dialogsElements }
            </div>

            <div className = {cls.messages}>
                { messagesElement }
            </div>
        </div>
    )
}

export default Dialogs;