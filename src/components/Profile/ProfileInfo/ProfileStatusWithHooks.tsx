import React from 'react';



type PropsTypes = {
  status: string

  updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsTypes> = (props) => {

  const [editMode, setEditMode] = React.useState(false);
  const [status, setStatus] = React.useState(props.status);

  React.useEffect( () => {
    
    setStatus(props.status);

  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status);
  }

  const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div>
      {!editMode
        ? <div> <b>Status:</b> <span onDoubleClick = { activateEditMode }> {props.status || 'No status'} </span> </div>
        : <div> <input  value={ status } onBlur = { deactivateEditMode } onChange = { onStatusChange } autoFocus = {true} /> </div>}
    </div>
  )
}

export default ProfileStatusWithHooks;