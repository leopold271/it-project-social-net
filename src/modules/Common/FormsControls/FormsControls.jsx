import React from "react";
import classes from './FormsControls.module.css';
import {Field} from 'redux-form';

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
            <div >
                <textarea {...input} {...props}/>
            </div>

            {hasError && <span>{meta.error}</span>}

        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
            <div >
                <input {...input} {...props}/>
            </div>

            {hasError && <span>{meta.error}</span>}

        </div>
    )
}

export const fieldCreator = (placeholder, name, component, validator, props={}, text='') => (
    <div>
    <Field placeholder={placeholder} name={name} component={component} validate={validator} {...props}/>
    {text}
    </div>
)