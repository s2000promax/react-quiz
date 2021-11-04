import React from "react";
import classes from './Auth.module.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import is from 'is_js'

class Auth extends React.Component {

    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Enter correct email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Enter correct password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHundler = even => {
        even.preventDefault()
    }

    validateControl(value, validation) {
        if (!validation) {
            return true
        }

        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {

isValid = is.email(value) && isValid

        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    onChangeHandler(event, controlName) {
      //  console.log(`${controlName}: `, event.target.value)

        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true
        Object.keys(formControls).forEach( name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({
            formControls, isFormValid
        })

    }

    renderInputs() {
        const inputs = Object.keys(this.state.formControls).map(
            (controlName, index) => {
                const control = this.state.formControls[controlName]
                return (
                    <Input
                        key={controlName + index}
                        type={control.type}
                        value={control.value}
                        valid={control.valid}
                        touched={control.touched}
                        label={control.label}
                        shouldValidate={!!control.validation}
                        errorMessage={control.errorMessage}
                        onChange={event => this.onChangeHandler(event, controlName)}
                    />
                )
            }
        )
        return inputs
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Authorization</h1>
                    <form onSubmit={this.submitHundler} className={classes.AuthForm}>

                        {this.renderInputs()}

                        <Button
                            type="success"
                            OnClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Log In
                        </Button>

                        <Button
                            type="primary"
                            OnClick={this.registerHandler}
                            disabled={!this.state.isFormValid}

                        >
                            Log Up
                        </Button>

                    </form>
                </div>

            </div>
        )
    }
}

export default Auth