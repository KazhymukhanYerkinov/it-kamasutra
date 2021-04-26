import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import { ContactsType, ProfileType } from '../../../types/types';
import ProfileDataForm from './ProfileDataForm';

import cls from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

type PropsType = {
  profile: ProfileType | null
  status: string
  isOwner: boolean

  savePhoto: (file: File) => void
  updateStatus: (status: string) => void
  saveProfile: (profile: ProfileType) => Promise<any>
  
}

const ProfileInfo: React.FC<PropsType> = (props) => {

  const [ editMode, setEditMode ] = React.useState(false);

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData: ProfileType) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
    
  }

  return (
    <div>
      <div className={cls.descriptionBlock}>
        <img className={cls.mainPhoto} src={props.profile.photos.large || 'https://yt3.ggpht.com/ytc/AAUvwngw35YY8vYI86RTOoEGafSxEjghjzTcKw3LbMyZ=s900-c-k-c0x00ffffff-no-rj'} alt="profile ava" />
        {props.isOwner && <input type='file' onChange={onMainPhotoSelected} />}

        { editMode 
        ? <ProfileDataForm
            onSubmit = { onSubmit }
            initialValues = { props.profile }
            profile = { props.profile } />
        : <ProfileData
            gotToEditMode = {() => { setEditMode(true) }}
            profile = { props.profile } 
            isOwner = { props.isOwner }
          />}
        
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  )
}


type ProfileDataProps = {
  profile: ProfileType
  isOwner: boolean
  gotToEditMode: () => void
}
const ProfileData: React.FC<ProfileDataProps> = ({ profile, gotToEditMode, isOwner }) => {
  return (
    <div>
      { isOwner 
        && <div> <button onClick = { gotToEditMode }> Edit </button> </div> }
      <div>
        <b> Full name: </b> {profile.fullName}
      </div>

      <div>
        <b> Looking for job: </b> {profile.lookingForAJob ? "YES" : "NO"}
      </div>

      {profile.lookingForAJob && <div>
        <b> My prefessional skills: </b> {profile.lookingForAJobDescription}
      </div>}

      <div>
        <b> About me: </b> {profile.aboutMe}
      </div>

      <div>
        <b> Contacts </b>: {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]} />
        })}
      </div>

    </div>
  )
}

type ContactsPropsType = {
  contactTitle: string
  contactValue: string
}

const Contact: React.FC<ContactsPropsType> = ({ contactTitle, contactValue }) => {
  return <div className={cls.contact}> <b> {contactTitle}: </b> {contactValue} </div>
}

export default ProfileInfo;