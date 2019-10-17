import React, { Component } from 'react';
import './ChangePassword.css';
import { Row } from 'react-bootstrap';
import classnames from 'classnames';
import {changePassword} from '../../../../actions/profile';
import { connect } from "react-redux";

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldPassword: '',
            newPassword: '',
            errors: {
            },
            isLoading:false
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
        if (this.state.oldPassword === '') errors.oldPassword = "Cant't be empty!";
        if (this.state.oldPassword === this.state.newPassword) errors.newPassword = "Новий пароль не має містити старий пароль";
        if (this.state.newPassword === '') errors.newPassword = "Cant't be empty";

        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            const {oldPassword,newPassword } = this.state;
            const clientId = this.props.auth.user.id;
            this.setState({ isLoading: true });
            this.props.changePassword({clientId,oldPassword,newPassword})
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
        const { errors, isLoading } = this.state;
        return (
            <div className='edit-info container'>
               <h1>ЗМІНИТИ ПАРОЛЬ</h1>
                <Row>
                    <form onSubmit={this.onSubmitForm}>
                        <div className='center'>
                            <div>
                            <div className={classnames('form-group', { 'error': !!errors.oldPassword })}>
                            <label>СТАРИЙ ПАРОЛЬ</label>
                            <input type="password" className="form-control" placeholder="Старий пароль"
                                id="oldPassword"
                                name="oldPassword"
                                value={this.state.oldPassword}
                                onChange={this.handleChange} />
                            {!!errors.oldPassword ? <span className="help-block">{errors.oldPassword}</span> : ''}
                        </div>
                        <div className={classnames('form-group', { 'error': !!errors.newPassword })}>
                            <label>НОВИЙ ПАРОЛЬ</label>
                            <input type="password" className="form-control" placeholder="Новий пароль"
                                id="newPassword"
                                name="newPassword"
                                value={this.state.newPassword}
                                onChange={this.handleChange} />
                            {!!errors.newPassword ? <span className="help-block">{errors.newPassword}</span> : ''}
                        </div>
                        <button type='submit'>ЗМІНИТИ</button>
                        </div>
                        {!!errors.invalid ?
            <div className="alert alert-danger">
              {errors.invalid}.
                    </div> : isLoading?<div className="alert alert-success">Пароль успішно змінено</div>:''}
                        </div>
                    </form>
                   
                </Row>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
}
export default connect(mapStateToProps, { changePassword})(ChangePassword);