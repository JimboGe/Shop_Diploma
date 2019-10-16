import React, { Component } from 'react';
import './Order.css';
import { newOrder } from '../../../actions/order';
import { connect } from "react-redux";
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            productSize: '',
            count: 0,
            done: false,
            isLoading: false,
            userId: 1,
            errors: {
            },
            product: {}
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
        if (this.state.name === '') errors.name = "Введіть ваше Ім'я"
        if (this.state.phone === '') errors.phone = "Введіть телефон"

        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            const { name, phone, count, productSize, product, userId } = this.state;
            this.setState({ isLoading: true });
            this.props.newOrder({ name, phone, productSize, count, product, userId })
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
        console.log(this.state);
    }
    render() {
        const { errors, isLoading } = this.state;
        const form = (
            <form onSubmit={this.onSubmitForm}>
                <h3>ЗАМОВЛЕННЯ</h3>
                <div className={classnames('form-group', { 'error': !!errors.name })}>
                    <label>ІМ'Я</label>
                    <input type="text" className="form-control"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange} />
                    {!!errors.name ? <span className="help-block">{errors.name}</span> : ''}
                </div>
                <div className={classnames('form-group', { 'error': !!errors.phone })}>
                    <label >PHONE</label>
                    <input type="phone" className="form-control"
                        id="phone"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange} />
                    {!!errors.phone ? <span className="help-block">{errors.phone}</span> : ''}
                </div>
                <button type="submit" className="btn btn-dark" >ЗАМОВИТИ</button>
            </form>
        );
        return (

            <div className='order'>
                {form}
            </div>
        );
    }
}


export default connect(null, { newOrder })(Order);