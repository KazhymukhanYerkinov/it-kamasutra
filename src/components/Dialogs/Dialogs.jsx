import React from 'react';

import cls from './Dialogs.module.css';


const Dialogs = () => {
    return (
        <div className = {cls.dialogs}>
            <div className = {cls.dialogsItems}>
                <div className = {cls.dialog}>
                    Andrey
                </div>
                <div className = {cls.dialog}>
                    Dimych
                </div>
                <div className = {cls.dialog}>
                    Sveta
                </div>
                <div className = {cls.dialog}>
                    Sasha
                </div>
                <div className = {cls.dialog}>
                    Valera
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