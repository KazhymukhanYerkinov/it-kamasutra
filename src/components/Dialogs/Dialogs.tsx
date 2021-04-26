import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

import { maxLengthCreator, required } from '../../utils/validators';
import { CreateField, TextArea } from '../../common/FormControl/FormControl';

import cls from './Dialogs.module.css';
import { InitialStateType } from '../../redux/dialogs-reducer';


const maxLength50 = maxLengthCreator(50);


const AddMessageForm: React.FC<InjectedFormProps<NewMesssageFormType>> = (props) => {
  return (
    <form onSubmit = { props.handleSubmit }>
      <div>

      { CreateField<DialogFormValuesTypeKeys>("Enter your message", 'newMessageBody', [required, maxLength50], TextArea, ) }
        
      </div>

      <div>
        <button type = 'submit'> Send </button>
      </div>
    </form>
  )
}

const AddMessageReduxForm = reduxForm<NewMesssageFormType>({ form: 'dialogAddMessageForm' })(AddMessageForm);


type NewMesssageFormType = {
  newMessageBody: string
}

type DialogFormValuesTypeKeys = Extract<keyof NewMesssageFormType, string>

type OwnPropsType = {
  dialogsPage: InitialStateType
  sendMessage: (messageText: string) => void
}


const Dialogs: React.FC<OwnPropsType> = (props) => {

  let dialogsElements = props.dialogsPage.dialogs
    .map((dialog, index) => <DialogItem key={index} id={dialog.id} name={dialog.name} />);

  let messagesElement = props.dialogsPage.messages
    .map((message, index) => <Message key={index} id={message.id} message={message.message} />);

  const onSubmit = (formData: NewMesssageFormType) => {
    props.sendMessage(formData.newMessageBody);
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