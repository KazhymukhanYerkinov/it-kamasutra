import React from 'react';
import { reduxForm } from 'redux-form';
import { CreateField, Input, TextArea } from '../../../common/FormControl/FormControl';
import cls from './ProfileInfo.module.css';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit = { handleSubmit }>
      <div> <button type = 'submit'> save </button> </div>

      {error && 
      <div>
        { error }
      </div>}

      <div>
        <b> Full name: </b> { CreateField("Full name", "fullName", [], Input ) }
      </div>

      <div>
        <b> Looking for a job: </b> { CreateField("", "lookingForAJob", [], Input, { type: "checkbox" }) }
      </div>

      <div>
        <b> My proffesional skills: </b> { CreateField("My professional skills", "lookingForAJobDescription", [], TextArea) }
      </div>

      <div>
        <b> About me: </b> { CreateField("About me", "aboutMe", [], TextArea) }
      </div>

      <div>
        <b>Contacts: </b> { Object.keys(profile.contacts).map(key => {
          return (
            <div className = {cls.contacts} key = { key }>
              <b> {key }: </b> { CreateField(key, "contacts." + key, [], Input) }
            </div>
          )
        }) }
      </div>
    </form>
  )
}

const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);


export default ProfileDataReduxForm;