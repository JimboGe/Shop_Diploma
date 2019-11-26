import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './SignUp.css';
import { Redirect } from 'react-router';
import classnames from 'classnames';
import { register } from "../../../actions/auth";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getCities, getRegions } from '../../../helpers/getDataForAddress';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phonenumber: '',
            region: '',
            city: '',
            numberDelivery: '',
            done: false,
            isLoading: false,
            errors: {
            }
        };
    }
    componentDidMount() {
        getRegions();
        getCities();
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
        if (this.state.lastName === '') errors.lastName = "Прізвище повинно бути від 1 до 32 символів!";
        if (this.state.firstName === '') errors.firstName = "Ім'я повинне бути від 1 до 32 символів!";
        if (this.state.email === '') errors.email = "Некоректний адрес електронної пошти!";
        if (this.state.phonenumber === '' ) errors.phonenumber = "Не коректний телефон!";
        if (this.state.region === '') errors.region = "Виберіть область!";
        if (this.state.city === '') errors.city = "Виберіть місто!";
        if (this.state.numberDelivery === '') errors.numberDelivery = "Введіть відділення Нової почти!";
        console.log(this.state);
        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            const { lastName, firstName, email, password, phonenumber, region, city, numberDelivery } = this.state;
            this.setState({ isLoading: true });
            this.props.register({ email, password, phonenumber, region, city, numberDelivery, firstName, lastName })
                .then(
                    () => this.setState({ done: true }),
                    (err) => {
                        this.setState({ errors: err.response.data, isLoading: false });
                    }
                );
        }
        else {
            this.setState({ errors });
        }
    }
    render() {
        console.log('----WINDOW---', this.state);
        const { errors, isLoading } = this.state;
        var form = (
            <div className='container sign'>
                <Row>
                    <Col md={8} lg={6}>
                        <div className='signup box'>
                            <form onSubmit={this.onSubmitForm}>
                                <h3>РЕЄСТРАЦІЯ</h3>
                                <p>
                                    Якщо Ви вже зареєстровані, перейдіть на сторінку авторизації.
                                </p>
                                <div className={classnames('form-group', { 'error': !!errors.lastName })}>
                                    <label>ПРІЗВИЩЕ</label>
                                    <input type="text" className="form-control"
                                        id="lastName"
                                        name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.handleChange} />
                                    {!!errors.lastName ? <span className="help-block">{errors.lastName}</span> : ''}
                                </div>
                                <div className={classnames('form-group', { 'error': !!errors.firstName })}>
                                    <label>ІМ'Я</label>
                                    <input type="text" className="form-control"
                                        id="firstName"
                                        name="firstName"
                                        value={this.state.firstName}
                                        onChange={this.handleChange} />
                                    {!!errors.firstName ? <span className="help-block">{errors.firstName}</span> : ''}
                                </div>
                                <div className={classnames('form-group', { 'error': !!errors.email })}>
                                    <label >EMAIL</label>
                                    <input type="email" className="form-control"
                                        id="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange} />
                                    <small className="form-text text-muted">Ми ніколи не поділимося вашим електронним листом ні з ким іншим.</small>
                                    {!!errors.email ? <span className="help-block">{errors.email}</span> : ''}
                                </div>
                                <div className={classnames('form-group', { 'error': !!errors.password })}>
                                    <label >ПАРОЛЬ</label>
                                    <input type="password" className="form-control"
                                        id="password"
                                        name="password"
                                        required
                                        value={this.state.password}
                                        onChange={this.handleChange} />
                                    {!!errors.password ? <span className="help-block">{errors.password}</span> : ''}
                                </div>
                                <div className={classnames('form-group', { 'error': !!errors.phonenumber })}>
                                    <label>ТЕЛЕФОН</label>
                                    <input type="tel" className="form-control"
                                        id="phonenumber"
                                        name="phonenumber"
                                        value={this.state.phonenumber}
                                        onChange={this.handleChange}
                                        pattern="[0-9]{3}[0-9]{2}[0-9]{3}[0-9]{4}"/>
                                    {!!errors.phonenumber ? <span className="help-block">{errors.phonenumber}</span> : ''}
                                </div>
                                <div className={classnames('form-group', { 'error': !!errors.region })}>
                                    <label>ОБЛАСТЬ</label>
                                    <select className="form-control"
                                        name='region' id='region'
                                        value={this.state.region}
                                        onChange={this.handleChange}>
                                        <option></option>
                                    </select>
                                    {!!errors.region ? <span className="help-block">{errors.region}</span> : ''}
                                </div>
                                <div className={classnames('form-group', { 'error': !!errors.city })}>
                                    <label>МІСТО</label>
                                    <select className="form-control"
                                        name='city' id='city'
                                        value={this.state.city}
                                        onChange={this.handleChange}>
                                        <option></option>
                                    </select>
                                    {!!errors.city ? <span className="help-block">{errors.city}</span> : ''}
                                </div>
                                <div className={classnames('form-group', { 'error': !!errors.numberDelivery })}>
                                    <label>ВІДДІЛЕННЯ НОВОЇ ПОШТИ</label>
                                    <input type="text" className="form-control"
                                        id="numberDelivery"
                                        name="numberDelivery"
                                        value={this.state.numberDelivery}
                                        onChange={this.handleChange} />
                                    {!!errors.numberDelivery ? <span className="help-block">{errors.numberDelivery}</span> : ''}
                                </div>
                                <button type="submit" className="btn btn-dark" >Зареєструватися</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        );
        return (
            this.state.done ?
                <Redirect to="/" /> : form
        )
    }
}
SignUpForm.propTypes =
    {
        register: PropTypes.func.isRequired
    }

export default connect(null, { register, getCities })(SignUpForm);