import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import {  deleteProduct } from '../actions/products';

class Tet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'dsdasd',
            description: 'dsdad',
            size: 'sdads',
            count: 2,
            color: 'gggege',
            gender: 'man',
            price: 120,
            categoryId: 1,
            brandId: 1,
            sizeImageId: 1,
            errors:{}
        };
    }
    onSubmitForm = (e) => {
        e.preventDefault();
        let errors = {};
        if (this.state.description === '') errors.name = "Ім'я повинно бути від 3 до 25 символів!"
        if (this.state.name === '') errors.name = "Ім'я повинно бути від 3 до 25 символів!"
        console.log(this.state);
        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            const { name,description,size,count,color,gender,price,categoryId,brandId,sizeImageId } = this.state;
            // this.props.newProduct({name,description,size,count,color,gender,price,categoryId,brandId,sizeImageId})
            //     .then(
            //         () => { }
            //     )
            //     .then(this.setState({ errors }));
                this.props.deleteProduct(1)
                .then(
                    () => { }
                )
                .then(this.setState({ errors }))
        }
        else {
            this.setState({ errors });
        }
        if(!isValid) 
        e.preventDefault();
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
                <form onSubmit={this.onSubmitForm}>
                    <h3>Написати відгук</h3>
                    <input type="text" id='name' name='name' value={this.state.name} onChange={this.handleChange} className="form-control" placeholder="Ваше ім'я" />
                    <textarea className="form-control" id='text' value={this.state.text} name='text' onChange={this.handleChange} placeholder="Ваш відгук" />
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
                    <br />
                    <Button style={{marginBottom:'15px'}}type="submit">ВІДПРАВИТИ ВІДГУК</Button>
                    {!!errors.name ? <span className="help-block danger"><span class="fa fa-exclamation-circle"/>{errors.name}</span> : ''}
                    {!!errors.text ? <span className="help-block danger"><span class="fa fa-exclamation-circle"/>{errors.text}</span> : ''}
                    {!!errors.rating ? <span className="help-block danger"><span class="fa fa-exclamation-circle"/>{errors.rating}</span> : ''}
                </form>
            </div>
        );
    }
}

export default connect(null, { deleteProduct })(Tet)
