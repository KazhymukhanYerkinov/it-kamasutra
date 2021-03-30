import React from 'react';

// import cls from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {

    state = {
      editMode: false,
      status: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevProps.status !== this.props.status) {
        this.setState( {
          status: this.props.status
        } )
      }
      
    }

    activateEditMode = () => {
      this.setState( {
        editMode: true
      } )
    }

    deactivateEditMode = () => {
      this.setState( {
        editMode: false
      } );
      this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
      this.setState( {
        status: e.currentTarget.value
      } )
    }

    render() {
      return (
          <div>
            {!this.state.editMode 
            ? <div onDoubleClick = { this.activateEditMode }> <span> { this.props.status || 'No status'} </span> </div> 
            : <div> <input onChange = { this.onStatusChange } autoFocus onBlur = { this.deactivateEditMode } value = { this.state.status } /> </div>}
          </div>
      )
    }
}

export default ProfileStatus;