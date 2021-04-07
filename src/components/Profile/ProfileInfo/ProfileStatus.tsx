import React from 'react';

type PropsType = {
  status: string
  updateStatus: (newStatus: string) => void

}

type StateType = {
  editMode: boolean
  status: string 
}


class ProfileStatus extends React.Component<PropsType, StateType> {

    state = {
      editMode: false,
      status: this.props.status
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
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

    onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState( {
        status: e.currentTarget.value
      } )
    }

    render() {
      return (
          <div>
            {!this.state.editMode 
            ? <div> <span onDoubleClick = { this.activateEditMode }> { this.props.status || 'No status'} </span> </div> 
            : <div> <input onChange = { this.onStatusChange } autoFocus onBlur = { this.deactivateEditMode } value = { this.state.status } /> </div>}
          </div>
      )
    }
}

export default ProfileStatus;