import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { CreateField, Input, TextArea } from '../../../common/FormControl/FormControl';
import { ProfileType } from '../../../types/types';
import cls from './ProfileInfo.module.css';


type PropsType = {
  profile: ProfileType
}

type ProfileTypeKeys = Extract<keyof ProfileType, string>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType > & PropsType> = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit = { handleSubmit }>
      <div> <button type = 'submit'> save </button> </div>

      {error && 
      <div>
        { error }
      </div>}

      <div>
        <b> Full name: </b> { CreateField<ProfileTypeKeys>("Full name", "fullName", [], Input ) }
      </div>

      <div>
        <b> Looking for a job: </b> { CreateField<ProfileTypeKeys>("", "lookingForAJob", [], Input, { type: "checkbox" }) }
      </div>

      <div>
        <b> My proffesional skills: </b> { CreateField<ProfileTypeKeys>("My professional skills", "lookingForAJobDescription", [], TextArea) }
      </div>

      <div>
        <b> About me: </b> { CreateField<ProfileTypeKeys>("About me", "aboutMe", [], TextArea) }
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

const ProfileDataReduxForm = reduxForm<ProfileType, PropsType>({ form: 'edit-profile' })(ProfileDataForm);


export default ProfileDataReduxForm;