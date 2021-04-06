import React from 'react';


const ProfileStatusWithHooks = (props) => {

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

  const onStatusChange = (e) => {
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