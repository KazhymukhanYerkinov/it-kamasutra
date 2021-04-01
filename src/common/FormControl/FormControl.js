import React from 'react';
import { Field } from 'redux-form';
import cls from './FormControl.module.css';

const FormControl = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;

  return (
    <div className={cls.formControl + " " + (hasError ? cls.error : '')}>
      <div>
        {props.children}
      </div>

      {hasError && <span> {meta.error} </span>}
    </div>
  )
}

export const TextArea = (props) => {
  const { input, ...restprops } = props;
  return <FormControl {...props}><textarea {...input} {...restprops} /></FormControl>
}

export const Input = (props) => {
  const { input, ...restprops } = props;
  return <FormControl {...props}><input {...input} {...restprops} /></FormControl>
}

export const CreateField = (placeholder, name, validators, component, props = {}, text = "") => {
  return (
    <div>
      <Field
        {...props}
        placeholder={placeholder}
        name = { name }
        validate = { validators }
        component = { component }
      /> { text }
    </div>
  )
}