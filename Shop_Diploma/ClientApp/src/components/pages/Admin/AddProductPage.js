import React, { Component } from 'react';
import './Admin.css';
import { Row, Col } from 'react-bootstrap';
import UsersTable from './UsersTable';
import classnames from 'classnames';
import { connect } from "react-redux";
import { newProduct } from '../../../actions/products';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import axios from 'axios';

class AddProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            size: '',
            color: '',
            count: 0,
            gender: '',
            price: 0,
            categoryId: 0,
            brandId:0,
            sizeImageId:0,
            done: false,
            isLoading: false,
            images:[
                {
                    path:'tet'
                }
            ],
            errors: {
            }
        };
    }
    handleChange = (e) => {
        this.setStateByErrors(e.target.name, e.target.value);
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
    onSubmitForm = (e) => {
        e.preventDefault();
        let errors = {};
        if (this.state.name === '') errors.name = "Прізвище повинно бути від 1 до 32 символів!";
        if (this.state.description === '') errors.description = "Ім'я повинне бути від 1 до 32 символів!";
        if (this.state.size === '') errors.size = "Некоректний адрес електронної пошти!";
        if (this.state.color === '') errors.color = "Пароль повинен бути від 4 до 20 символів!";
        if (this.state.count === 0) errors.count = "Некоректний телефон!";
        if (this.state.gender === '') errors.gender = "Виберіть область!";
        if (this.state.price === 0) errors.price = "Виберіть місто!";
        if (this.state.categoryId === 0) errors.categoryId = "Виберіть відділення Нової почти!";
        if (this.state.brandId === 0) errors.brandId = "Виберіть відділення Нової почти!";
        if (this.state.sizeImageId === 0) errors.sizeImageId = "Виберіть відділення Нової почти!";
        if (this.state.images.length<0) errors.images = "Виберіть відділення Нової почти!";
        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            const { name, description, size, color, count, gender, price, categoryId ,brandId,sizeImageId,images} = this.state;
            this.setState({ isLoading: true });
            this.props.newProduct({ name, description, size, color, count, gender, price, categoryId,brandId,sizeImageId,images })
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
    imgSelect(){
        var file = document.getElementById('file');
        var image =file.files[0];
        console.log(image);
       
    }
   
  render() {
    const { errors } = this.state;

    var form = (
        <div className='container sign'>
            <Row>
                <Col md={8} lg={6}>
                    <div className='signup box'>
                        <form onSubmit={this.onSubmitForm}>
                            <h3>НОВИЙ ПРОДУКТ</h3>
                            <div className={classnames('form-group', { 'error': !!errors.name })}>
                                <label>name</label>
                                <input type="text" className="form-control"
                                    id="name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange} />
                                {!!errors.name ? <span className="help-block">{errors.name}</span> : ''}
                            </div>
                            <div className={classnames('form-group', { 'error': !!errors.description })}>
                                <label>description</label>
                                <input type="text" className="form-control"
                                    id="description"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.handleChange} />
                                {!!errors.description ? <span className="help-block">{errors.description}</span> : ''}
                            </div>
                            <div className={classnames('form-group', { 'error': !!errors.size })}>
                                <label >size</label>
                                <input type="text" className="form-control"
                                    id="size"
                                    name="size"
                                    value={this.state.size}
                                    onChange={this.handleChange} />
                                <small className="form-text text-muted">Ми ніколи не поділимося вашим електронним листом ні з ким іншим.</small>
                                {!!errors.size ? <span className="help-block">{errors.size}</span> : ''}
                            </div>
                            <div className={classnames('form-group', { 'error': !!errors.color })}>
                                <label >color</label>
                                <input type="text" className="form-control"
                                    id="color"
                                    name="color"
                                    value={this.state.color}
                                    onChange={this.handleChange} />
                                {!!errors.color ? <span className="help-block">{errors.color}</span> : ''}
                            </div>
                            <div className={classnames('form-group', { 'error': !!errors.count })}>
                                <label>count</label>
                                <input type="text" className="form-control"
                                    id="count"
                                    name="count"
                                    value={this.state.count}
                                    onChange={this.handleChange} />
                                {!!errors.count ? <span className="help-block">{errors.count}</span> : ''}
                            </div>
                            <div className={classnames('form-group', { 'error': !!errors.gender })}>
                                <label>gender</label>
                                <select className="form-control"
                                    id="gender"
                                    name="gender"
                                    value={this.state.gender}
                                    onChange={this.handleChange} >
                                        <option>man</option>
                                        <option>woman</option>
                                        </select>
                                {!!errors.gender ? <span className="help-block">{errors.gender}</span> : ''}
                            </div>
                            <div className={classnames('form-group', { 'error': !!errors.price })}>
                                <label>price</label>
                                <input type="text" className="form-control"
                                    id="price"
                                    name="price"
                                    value={this.state.price}
                                    onChange={this.handleChange} />
                                {!!errors.price ? <span className="help-block">{errors.price}</span> : ''}
                            </div>
                            <div className={classnames('form-group', { 'error': !!errors.categoryId })}>
                                <label>categoryId</label>
                                <input type="text" className="form-control"
                                    id="categoryId"
                                    name="categoryId"
                                    value={this.state.categoryId}
                                    onChange={this.handleChange} />
                                {!!errors.categoryId ? <span className="help-block">{errors.categoryId}</span> : ''}
                            </div>
                            <div className={classnames('form-group', { 'error': !!errors.brandId })}>
                                <label>brandId</label>
                                <input type="text" className="form-control"
                                    id="brandId"
                                    name="brandId"
                                    value={this.state.brandId}
                                    onChange={this.handleChange} />
                                {!!errors.brandId ? <span className="help-block">{errors.brandId}</span> : ''}
                            </div>
                            <div className={classnames('form-group', { 'error': !!errors.sizeImageId })}>
                                <label>sizeImageId</label>
                                <input type="text" className="form-control"
                                    id="sizeImageId"
                                    name="sizeImageId"
                                    value={this.state.sizeImageId}
                                    onChange={this.handleChange} />
                                {!!errors.sizeImageId ? <span className="help-block">{errors.sizeImageId}</span> : ''}
                            </div>
                           
                            <div>
                            <input type='file' id="file" name="file" accept=".jpg, .jpeg, .png" onChange={this.imgSelect}/>
                                <Cropper
                                src=''
                                style={{height: 400, width: '100%'}}
                                aspectRatio={16 / 9}
                                guides={false}/>
                            </div>
                            <button type="submit" className="btn btn-dark" >ДОДАТИ</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </div>
    );
    
    return (
      <div>
          {form}
      </div>
    );
  }
}
export default connect(null, { newProduct })(AddProductPage)