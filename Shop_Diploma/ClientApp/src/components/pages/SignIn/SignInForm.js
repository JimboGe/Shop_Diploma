import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import { login } from "../../../actions/auth";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Redirect } from "react-router";

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
            done: false
        };
    }
    setStateByErrors = (name, value) => {
        if (!!this.state.errors[name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[name];
            this.setState(
                {
                    [name]: value,
                    errors
                }
            )
        }
        else {
            this.setState(
                { [name]: value })
        }
    }
    handleChange = (e) => {
        this.setStateByErrors(e.target.name, e.target.value);
    }
    onSubmitForm = (e) => {
        e.preventDefault();
        let errors = {};
        if (this.state.email === '') errors.email = "Cant't be empty!"
        if (this.state.password === '') errors.password = "Cant't be empty!"

        const isValid = Object.keys(errors).length === 0
        if (isValid) {
            const { email, password } = this.state;
            this.setState({ isLoading: true });
            this.props.login({ Email: email, Password: password })
                .then(
                    () => { this.setState({ done: true }) },
                    (err) => this.setState({ errors: err.response.data, isLoading: false })
                );
        }
        else {
            this.setState({ errors });
        }

    }
    render() {
        const { errors } = this.state;
        const form = <form onSubmit={this.onSubmitForm}>
            <div className='signin box'>
                <h4>УВІЙТИ</h4>
                <p>
                    Увійти в Особистий Кабінет
                    </p>
                <div className="form-group">
                    <label>E-MAIL</label>
                    <input type='email' className='form-control' id='email' name='email'
                        value={this.state.email} onChange={this.handleChange} aria-describedby="emailHelp" placeholder="E-Mail" />
                        {!!errors.email ? <span className="help-block">{errors.email}</span> : ''}
                </div>
                <div className="form-group">
                    <label>ПАРОЛЬ</label>
                    <input type="password" className="form-control" id="password" name='password'
                        value={this.state.password} onChange={this.handleChange} placeholder="Пароль" />
                        {!!errors.password ? <span className="help-block">{errors.password}</span> : ''}
                </div>
                <button type="submit" className="btn btn-dark">УВІЙТИ</button>
                {!!errors.invalid ?
            <div className="alert alert-danger">
              {errors.invalid}.
                    </div> : ''}
            </div>
        </form>
        return (
            this.state.done ? <Redirect to='/' /> : form
        )
    }
}
SignInForm.propTypes =
    {
        login: PropTypes.func.isRequired
    }
export default connect(null, { login })(SignInForm);