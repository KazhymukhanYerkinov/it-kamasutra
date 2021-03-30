import React from 'react';
import { Redirect } from 'react-router';
import { reduxForm, Field } from 'redux-form';

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

import { maxLengthCreator, required } from '../../utils/validators';
import { TextArea } from '../../common/FormControl/FormControl';

import cls from './Dialogs.module.css';


const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit = { props.handleSubmit }>
      <div>
        <Field
          component = { TextArea }
          name = 'newMessageBody'
          placeholder='Enter your message'
          validate = {[required, maxLength50]}
        />
      </div>

      <div>
        <button type = 'submit'> Send </button>
      </div>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

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




export default Dialogs;