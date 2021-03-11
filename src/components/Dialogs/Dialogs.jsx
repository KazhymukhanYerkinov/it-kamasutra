import React from 'react';
import { NavLink } from 'react-router-dom';

import cls from './Dialogs.module.css';


const Dialogs = () => {
    return (
        <div className = {cls.dialogs}>
            <div className = {cls.dialogsItems}>
                <div className = {cls.dialog}>
                    <NavLink to = "/dialogs/1"> Andrey </NavLink>
                </div>
                <div className = {cls.dialog}>
                    <NavLink to = "/dialogs/2"> Dimych </NavLink>
                </div>
                <div className = {cls.dialog}>
                    <NavLink to = "/dialogs/3"> Sveta </NavLink>
                </div>
                <div className = {cls.dialog}>
                    <NavLink to = "/dialogs/4"> Sasha </NavLink>
                </div>
                <div className = {cls.dialog}>
                    <NavLink to = "/dialogs/5"> Valera </NavLink>
                </div>
            </div>

            <div className = {cls.messages}>
                <div className = {cls.message}>
                    Hi
                </div>
                <div className = {cls.message}>
                    How is your it-kamasutra
                </div>
                <div className = {cls.message}>
                    Yo
                </div>
            </div>
        </div>
    )
}

export default Dialogs;