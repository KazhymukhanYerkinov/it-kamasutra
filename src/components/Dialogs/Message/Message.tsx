import React from 'react';

import cls from './Message.module.css';


type PropsType = {
    id: number
    message: string
}
const Message: React.FC<PropsType> = (props) => {
    return <div className = {cls.message}> { props.message } </div>
}

export default Message;