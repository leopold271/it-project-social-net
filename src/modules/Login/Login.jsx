import React from "react";
import { Field, reduxForm } from 'redux-form';
import { Input, fieldCreator } from "../Common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { login } from "../../redux/authReducer";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import classes from '../Common/FormsControls/FormsControls.module.css'


const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {fieldCreator('Email', 'email', Input, required)}
            {fieldCreator('Password', 'password', Input, required, {type: 'password'})}
            {fieldCreator(null, 'rememberMe', Input, [], {type: 'checkbox'}, '')}
            
            { error && <div className={classes.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);