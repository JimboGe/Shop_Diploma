import React, { Component } from 'react';
import './EditInformation.css';
import { Row } from 'react-bootstrap';
import classnames from 'classnames';
import { getProfile, editProfile } from '../../../../actions/profile';
import { changeUserName } from '../../../../actions/auth';
import { setAlert } from '../../../../helpers/setAlert';
import { connect } from "react-redux";
import Inputmask from "inputmask";

class EditInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientId: '',
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            errors: {
            },
            isLoading: false
        };
    }
    componentDidMount = () => {
        let id = this.props.auth.user.id;
        this.props.getProfile(id)
            .then(
                () => { },
                (err) => { console.log("Error get data ", err); }
            );
            new Inputmask('(380)-99-999-99-99').mask(document.getElementById('phoneNumber'));
    }
    componentDidUpdate() {
        this.setStateProfile();
    }
    setStateProfile() {
        const state = this.state;
        const { profile } = this.props;
        console.log("PROFILE----", profile);
        if (state.clientId === '')
            this.setState({ clientId: profile.id });
        if (state.firstName === '')
            this.setState({ firstName: profile.firstName });
        if (state.lastName === '')
            this.setState({ lastName: profile.lastName });
        if (state.email === '')
            this.setState({ email: profile.email });
        if (state.phoneNumber === '')
            this.setState({ phoneNumber: profile.phoneNumber });
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
        if (this.state.firstName === '') errors.firstName = "Cant't be empty!";
        if (this.state.lastName === '') errors.lastName = "Cant't be empty!";
        if (this.state.email === '') errors.email = "Cant't be empty!";
        if (this.state.phoneNumber === '') errors.phoneNumber = "Cant't be empty!";
        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            const { clientId, email, firstName, lastName, phoneNumber } = this.state;
            this.setState({ isLoading: true });
            this.props.editProfile(clientId, { clientId, email, firstName, lastName, phoneNumber })
                .then(
                    () => { this.setState({ done: true }) },
                    (err) => this.setState({ errors: err.response.data, isLoading: false })
                );
            this.props.changeUserName(email);
            setAlert({ message: 'Данні успішно змінено', type: 'success' });
        }
        else {
            this.setState({ errors });
            setAlert({ message: 'Данні не змінено', type: 'danger' });
        }

    }
    render() {
        const { errors, isLoading } = this.state;
        return (
            <div className='edit-info container'>
                <h1>ОБЛІКОВИЙ ЗАПИС</h1>
                <Row>
                    <form onSubmit={this.onSubmitForm}>
                        <div className='center'>
                            <div>
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
                                    <label>EMAIL</label>
                                    <input type="email" className="form-control"
                                        id="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange} />
                                    {!!errors.email ? <span className="help-block">{errors.email}</span> : ''}
                                </div>
                                <div className={classnames('form-group', { 'error': !!errors.phoneNumber })}>
                                    <label>ТЕЛЕФОН</label>
                                    <input type="tel" className="form-control"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={this.state.phoneNumber}
                                        onChange={this.handleChange} />
                                    {!!errors.phoneNumber ? <span className="help-block">{errors.phoneNumber}</span> : ''}
                                </div>
                                <button type='submit'>ЗМІНИТИ</button>
                            </div>
                           
                        </div>
                    </form>

                </Row>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
        auth: state.auth
    };
}
export default connect(mapStateToProps, { getProfile, editProfile, changeUserName })(EditInformation);
