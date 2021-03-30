import React from 'react';
import { reduxForm, Field } from 'redux-form';

import { required } from '../../utils/validators';
import { Input } from '../../common/FormControl/FormControl';




const LoginForm = (props) => {
  return (
    <form onSubmit = {props.handleSubmit}>
      <div>
        <Field name = 'login' placeholder='Login' component = { Input } validate = {[required]}/>
      </div>
      <div>
        <Field name = 'password' placeholder='Password' component = { Input } validate = {[required]}/>
      </div>
      <div>
        <Field name = 'rememberMe' type='checkbox' component = 'input'/> remember me
      </div>
      <div>
        <button type = 'submit' >Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <div>
      <h1> Login </h1>
      <LoginReduxForm onSubmit = { onSubmit } />
    </div>
  )
}

export default Login;