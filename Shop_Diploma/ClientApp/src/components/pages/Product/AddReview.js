import React, { Component } from 'react';
import './ProductPage.css';
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addProductReview } from '../../../actions/products';
import classnames from 'classnames';

class AddReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            text: '',
            rating: 0,
            date: new Date(),
            errors:{}
        };
    }
    AddReview = (e) => {
        
        let errors = {};
        if (this.state.name === ''||this.state.name.length>25||this.state.name.length<3) errors.name = "Ім'я повинно бути від 3 до 25 символів!"
        if (this.state.text === ''||this.state.text.length>200||this.state.text.length<10) errors.text = "Текст відгуку повинен бути від 10 до 200 символів!"
        if (this.state.rating === 0) errors.rating = "Будь ласка, виберіть оцінку!"
        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            const { name,text,rating } = this.state;
            var {date} = this.state;
            date = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
            const productId = this.props.idProduct;
            this.props.addProductReview({productId ,name,text,rating})
                .then(
                    () => { }
                )
                .then(this.setState({ errors }))
        }
        else {
            this.setState({ errors });
            e.preventDefault();
        }
    }
    handleChange = (e) => {
        this.setStateByErrors(e.target.name, e.target.value);
    }
    choiceRatingComment(type, e) {
        const span = document.getElementById('rating');
        let arr = span.children;
        let elem = '';
        let id = 0;
        switch (type) {
            case 'leave': {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].getAttribute('canChange') === 'true')
                        arr[i].style.color = 'rgb(207, 207, 207)';
                    else {
                        arr[i].style.color = 'rgb(44, 44, 44)';
                    }
                }
                break;
            };
            case 'hover': {
                elem = e.target;
                id = parseInt(elem.getAttribute('rating'), 10);
                for (i = 0; i < arr.length; i++) {
                    if (arr[i].getAttribute('canChange') === 'true')
                        arr[i].style.color = 'rgb(207, 207, 207)';
                    else {
                        arr[i].style.color = 'rgb(207, 207, 207)';
                    }
                }
                for (i = 0; i < id; i++) {
                    arr[i].style.color = 'rgb(44, 44, 44)';
                }
                break;
            }
            case 'click': {
                elem = e.target;
                id = parseInt(elem.getAttribute('rating'), 10);
                this.setState({rating:id});
                for (i = 0; i < id; i++) {
                    arr[i].style.color = 'rgb(44, 44, 44)';
                    arr[i].setAttribute('canChange', 'false');
                }
                for (i = arr.length - 1; i >= id; i--) {
                    arr[i].setAttribute('canChange', 'true');
                    if (arr[i].getAttribute('canChange') === 'true') {
                        arr[i].style.color = 'rgb(207, 207, 207)';
                    }
                }
                break;
            }
            default: break;
        }

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
    render() {
        const { errors } = this.state;
        return (
            <div id='add-review-form'>
                <form onSubmit={this.AddReview}>
                    <h3>Написати відгук</h3>
                    <input type="text" id='name' name='name' value={this.state.name} onChange={this.handleChange}
                        className={classnames('form-control', { 'error': !!errors.name })}  placeholder="Ваше ім'я" />
                    {!!errors.name ? <span className="help-block">{errors.name}</span> : ''}
                    <textarea className={classnames('form-control', { 'error': !!errors.text })}  
                        id='text' value={this.state.text} name='text' onChange={this.handleChange} placeholder="Ваш відгук" />
                    {!!errors.text ? <span className="help-block">{errors.text}</span> : ''}
                    <span>ОЦІНКА</span><br />
                    <span id='rating' onMouseLeave={() => this.choiceRatingComment('leave', null)}>
                        <i canChange='true' onMouseEnter={(e) => this.choiceRatingComment('hover', e)}
                            onClick={(e) => this.choiceRatingComment('click', e)}
                            class="fa fa-star" rating='1'></i>
                        <i canChange='true' onMouseEnter={(e) => this.choiceRatingComment('hover', e)}
                            onClick={(e) => this.choiceRatingComment('click', e)}
                            class="fa fa-star" rating='2'></i>
                        <i canChange='true' onMouseEnter={(e) => this.choiceRatingComment('hover', e)}
                            onClick={(e) => this.choiceRatingComment('click', e)}
                            class="fa fa-star" rating='3'></i>
                        <i canChange='true' onMouseEnter={(e) => this.choiceRatingComment('hover', e)}
                            onClick={(e) => this.choiceRatingComment('click', e)}
                            class="fa fa-star" rating='4'></i>
                        <i canChange='true' onMouseEnter={(e) => this.choiceRatingComment('hover', e)}
                            onClick={(e) => this.choiceRatingComment('click', e)}
                            class="fa fa-star" rating='5'></i>
                    </span>
                    {!!errors.rating ? <span className="help-block">{errors.rating}</span> : ''}
                    <br />
                    <Button style={{marginBottom:'15px'}}type="submit">ВІДПРАВИТИ ВІДГУК</Button>
                </form>
            </div>
        );
    }
}

export default connect(null, { addProductReview })(AddReview)
