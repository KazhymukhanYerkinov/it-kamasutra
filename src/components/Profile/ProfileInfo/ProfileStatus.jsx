import React from 'react';

// import cls from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
      editMode: false,
      title: 'Yo'
    }

    activateEditMode = () => {
      this.setState( {
        editMode: true
      } )
    }

    deactivateEditMode = () => {
      this.setState( {
        editMode: false
      } )
    }
    render() {
      return (
          <div>
            {!this.state.editMode 
            ? <div onDoubleClick = { this.activateEditMode }> <span> { this.state.title } </span> </div> 
            : <div> <input autoFocus onBlur = { this.deactivateEditMode } value = { this.state.title } /> </div>}
          </div>
      )
    }
}

export default ProfileStatus;