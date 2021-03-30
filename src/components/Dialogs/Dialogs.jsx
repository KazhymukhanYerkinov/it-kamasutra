import React from 'react';

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

import cls from './Dialogs.module.css';
import { Redirect } from 'react-router';
import { reduxForm, Field } from 'redux-form';






const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs
    .map((dialog, index) => <DialogItem key={index} id={dialog.id} name={dialog.name} />);

  let messagesElement = props.dialogsPage.messages
    .map((message, index) => <Message key={index} id={message.id} message={message.message} />);

  

  

  const onSubmit = (formData) => {
    props.sendMessage(formData.newMessageBody);
  }

  if (!props.isAuth) {
    return <Redirect to='/login' />
  }

  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={cls.messages}>
        <div>
          {messagesElement}
        </div>
        <AddMessageReduxForm onSubmit = { onSubmit }/>
      </div>
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit = { props.handleSubmit }>
      <div>
        <Field
          component = 'textarea'
          name = 'newMessageBody'
          placeholder='Enter your message'
        />
      </div>

      <div>
        <button type = 'submit'> Send </button>
      </div>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default Dialogs;