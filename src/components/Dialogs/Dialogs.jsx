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
    return (
        <div className = {cls.dialogs}>
            <div className = {cls.dialogsItems}>
                <DialogItem name = 'Andrey' id = '1' />
                <DialogItem name = 'Dimych' id = '2' />
                <DialogItem name = 'Sveta' id = '3' />
                <DialogItem name = 'Sasha' id = '4' />
                <DialogItem name = 'Valera' id = '5'/>
            </div>

            <div className = {cls.messages}>
                <Message message = 'Hi' />
                <Message message = 'How is your it-kamasutra' />
                <Message message = 'Yo' />
            </div>
        </div>
    )
}

export default Dialogs;