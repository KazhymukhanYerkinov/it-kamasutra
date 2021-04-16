import React from 'react';
import { Field, WrappedFieldProps } from 'redux-form';
import { FieldValidatorType } from '../../utils/validators';
import cls from './FormControl.module.css';




const FormControl: React.FC<WrappedFieldProps>  = ({ meta, ...props }) => {
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

export const TextArea: React.FC<WrappedFieldProps> = (props) => {
  const { input, ...restprops } = props;
  return <FormControl {...props}><textarea {...input} {...restprops} /></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const { input, ...restprops } = props;
  return <FormControl {...props}><input {...input} {...restprops} /></FormControl>
}

export function CreateField<FormKeysType extends string>(placeholder: string | undefined, 
                            name: FormKeysType, 
                            validators: Array<FieldValidatorType>, 
                            component: string | React.FC<WrappedFieldProps>, 
                            props = {}, 
                            text = "") {
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