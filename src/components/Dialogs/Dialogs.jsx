import React from 'react';
import { NavLink } from 'react-router-dom';

import cls from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    
    return (
        <div className = {cls.dialog}>
            <NavLink to = {path}> { props.name } </NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className = {cls.message}> { props.message } </div>
}
const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Viktor'},

    ]
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yaho'},
    ]

    let dialogsElements = dialogsData
        .map( (dialog, index) => <DialogItem key = { index } id = { dialog.id } name = { dialog.name }/> );

    let messagesElement = messagesData
        .map( (message, index) => <Message key = { index } id = { message.id } message = { message.message } /> )

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