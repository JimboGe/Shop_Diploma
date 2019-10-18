import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import classnames from 'classnames';
import { connect } from "react-redux";
import { changeAddress,getProfile } from "../../../../actions/profile";
import './ChangeAddress.css';

class ChangeAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientId:'',
            region: '',
            city: '',
            numberDelivery: '',
            errors: {},
            isLoading: false
        };
    }
    componentDidMount=()=>{
        let id = this.props.auth.user.id;
        this.props.getProfile(id)
            .then(
                () => { },
                (err) => { console.log("Error get data ", err); }
            )
    }
    componentDidUpdate(){
        this.setStateProfile();
    }
    setStateProfile(){
        const state = this.state;
        const {profile} = this.props;
        if(state.clientId === '')
        this.setState({clientId: profile.id});
        if(state.region === '')
        this.setState({region: profile.region});
        if(state.city === '')
        this.setState({city: profile.city});
        if(state.numberDelivery === '')
        this.setState({numberDelivery: profile.numberDelivery});
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
        let errors = {};
        if (this.state.region === '') errors.region = "Виберіть Область";
        if (this.state.city === '') errors.city = "Виберіть Місто";
        if (this.state.numberDelivery === '') errors.numberDelivery = "Виберіть номер Нової Почти";
        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            const { region, city, numberDelivery, clientId } = this.state;
            this.setState({ isLoading: true });
             this.props.changeAddress(clientId,{clientId, region, city, numberDelivery })
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
        const { errors, isLoading } = this.state;
        return (
            <div className='edit-info container change-address'>
                <h1>ЗМІНИТИ АДРЕСУ</h1>
                <Row>
                    <form onSubmit={this.onSubmitForm}>
                        <div className='center'>
                        <div className={classnames('form-group', { 'error': !!errors.region })}>
                            <label>ОБЛАСТЬ</label>
                                <input type="text" className="form-control" placeholder="Введіть вашу Область"
                                    id="region"
                                    name="region"
                                    value={this.state.region}
                                    onChange={this.handleChange} />
                                {!!errors.region ? <span className="help-block">{errors.region}</span> : ''}
                            </div>
                            <div className={classnames('form-group', { 'error': !!errors.city })}>
                            <label>МІСТО</label>
                                <input type="text" className="form-control" placeholder="Введіть ваше Місто"
                                    id="city"
                                    name="city"
                                    value={this.state.city}
                                    onChange={this.handleChange} />
                                {!!errors.city ? <span className="help-block">{errors.city}</span> : ''}
                            </div>
                            <div className={classnames('form-group', { 'error': !!errors.numberDelivery })}>
                                <label>ВІДДІЛЕННЯ НОВОЇ ПОЧТИ</label>
                                <input type="text" className="form-control" placeholder="Введіть Відділення Нової Почти"
                                    id="numberDelivery"
                                    name="numberDelivery"
                                    value={this.state.numberDelivery}
                                    onChange={this.handleChange} />
                                {!!errors.numberDelivery ? <span className="help-block">{errors.numberDelivery}</span> : ''}
                            </div>
                            <button type='submit'>ЗМІНИТИ</button>
                            {!!errors.invalid ?
                            <div className="alert alert-danger">
                                {errors.invalid}.
                    </div> : isLoading ? <div className="alert alert-success">Адресу успішно змінено</div> : ''}
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
export default connect(mapStateToProps, {changeAddress, getProfile})(ChangeAddress);