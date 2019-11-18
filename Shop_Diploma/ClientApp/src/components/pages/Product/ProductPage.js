import React, { Component } from 'react';
import './ProductPage.css';
import { Row, Col, Button } from "react-bootstrap";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, DotGroup, ImageWithZoom, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import AddReview from './AddReview';
import { getProductById } from '../../../actions/products';
import { getRecommendedProducts } from '../../../actions/recommended_products';
import { addProductToCart } from '../../../actions/cart';
import { connect } from "react-redux";
import Product from '../../Product/Product';

import $ from 'jquery';

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idProduct: 0,
            currentSlide: 0,
            size: '',
            count: 1
        };
    }
    componentDidMount() {
        const { id, category } = this.props.match.params;
        this.setState({ idProduct: id });
        this.props.getProductById(id)
            .then(
                () => { },
                (err) => { console.log("Error get data ", err); }
            );
        this.props.getRecommendedProducts(category,id)
            .then(
                () => { },
                (err) => { console.log("Error get data ", err); }
            );
    }

    imageZoom(type, e) {
        const modal = document.getElementById('modal');
        if (type === 'show') {
            modal.setAttribute('class', 'modal');
            modal.style.display = 'block';
        }
        if (type === 'hide') {
            modal.style.display = 'block';
            modal.setAttribute('class', ' ');
        }
    }

    setCurrentSlide = () => {
        const carousel = document.getElementsByClassName('carousel');
        const slideElements = Array.from(carousel[0].getElementsByClassName("slide___3-Nqo slideHorizontal___1NzNV carousel__slide"));
        slideElements.forEach((element, index) => {
            element.getAttribute('aria-selected') === 'true' ? this.setState({ currentSlide: index }) : '';
        });
    }

    hide_show(e, id) {
        const elem = document.getElementById(id);
        if (elem.getAttribute('class') === 'hidden') {
            elem.setAttribute('class', 'visible');
            if (e != null)
                e.target.setAttribute('active', 'active');
        }
        else {
            elem.setAttribute('class', 'hidden');
            if (e != null)
                e.target.setAttribute('active', '');
        }
    }

    scrollTop(e) {
        e.preventDefault();
        var pos = $('#add-review-form').offset().top - 200;
        $('html,body').animate({ scrollTop: pos }, 1200, 'swing');
    }

    addProductToCart = (e) => {
        e.preventDefault();
        const product = this.props.products;
        const { name, price } = product[0];
        const image = product[0].images[0].path;
        const { size, count } = this.state;
        const hrefProduct = `/catalog/${product[0].gender}/${product[0].subcategory.name}/${product[0].brand.name}/p${product[0].id}`;
        this.props.addProductToCart({ hrefProduct, image, name, price, size, count });
    }

    render() {
        const product = this.props.products;
        const { currentSlide } = this.state;
        const { recommended_products } = this.props;
        console.log('rererer-er-e-r-er',recommended_products);
        var sizes = "";
        if (typeof sizes === 'string') {
            sizes = product.length > 0 ? product[0].sizes : '';
        }
        var reviews = product.length > 0 ? product[0].reviews : '';
        var rating = 0;
        if (reviews.length > 0) reviews.map((value) => rating = rating + value.rating);
        rating = rating / reviews.length;
        return (
            <div className='product-page container'>
                <form onSubmit={this.addProductToCart}>
                    <Row>
                        <Col lg={6}>
                            <div>
                                <CarouselProvider onClick={this.setCurrentSlide} hasMasterSpinner={true} isPlaying={true} interval={7500} naturalSlideWidth={70} naturalSlideHeight={95}
                                    totalSlides={product.length > 0 && product[0].images.length}>
                                    <div>
                                        <i className='fa fa-search-plus' onClick={(e) => this.imageZoom('show', e)}></i>
                                    </div>
                                    <Slider>
                                        {product.length > 0 && product[0].images.map((value, index, array) =>
                                            <Slide key={index} index={index}><ImageWithZoom index={index} src={value.path} /></Slide>)}
                                    </Slider>
                                    <ButtonBack className='button-move back' />
                                    <ButtonNext className='button-move next' />

                                    <DotGroup className='dot-group' />
                                    <div className='dot-group-image' >
                                        {product.length > 0 && product[0].images.map((value, index, array) =>
                                            <Dot slide={index} className='dot-image'>
                                                <Image
                                                    src={value.path}>
                                                </Image>
                                            </Dot>)}
                                    </div>
                                </CarouselProvider>
                            </div>
                            <div id='modal'>
                                <CarouselProvider hasMasterSpinner={true} currentSlide={currentSlide} naturalSlideWidth={70} naturalSlideHeight={93}
                                    totalSlides={product.length > 0 && product[0].images.length}>
                                    <Slider>
                                        {product.length > 0 && product[0].images.map((value, index, array) =>
                                            <Slide key={value} index={index + 1}><ImageWithZoom src={value.path} /></Slide>)}
                                    </Slider>
                                    <ButtonBack className='button-move back' />
                                    <ButtonNext className='button-move next' />
                                    <button onClick={() => this.imageZoom('hide', null)} className='close-modal'><i className="fa fa-times"></i></button>
                                </CarouselProvider>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='content'>
                                <div><h2 className='title'>{product.length > 0 && product[0].name} /{product.length > 0 && product[0].brand.name}</h2></div>
                                <div><h2 className='price'>{product.length > 0 && product[0].price} грн</h2></div>
                                <div className='review'>
                                    {rating >= 1 ? <i style={{ color: 'rgb(44, 44, 44)' }} class="fa fa-star"></i> : <i class="fa fa-star"></i>}
                                    {rating >= 2 ? <i style={{ color: 'rgb(44, 44, 44)' }} class="fa fa-star"></i> : <i class="fa fa-star"></i>}
                                    {rating >= 3 ? <i style={{ color: 'rgb(44, 44, 44)' }} class="fa fa-star"></i> : <i class="fa fa-star"></i>}
                                    {rating >= 4 ? <i style={{ color: 'rgb(44, 44, 44)' }} class="fa fa-star"></i> : <i class="fa fa-star"></i>}
                                    {rating >= 5 ? <i style={{ color: 'rgb(44, 44, 44)' }} class="fa fa-star"></i> : <i class="fa fa-star"></i>}
                                    <span>
                                        {reviews.length + ' відгуків'}

                                    </span>
                                </div>

                                {product.length > 0 && product[0].sizeImage.categoryName != 'none' &&
                                    <div className='size-grid'>
                                        <button onClick={(e) => { this.hide_show(e, 'size-grid-div') }}>РОЗМІРНА СІТКА</button>
                                        <div id='size-grid-div' className='hidden'>
                                            <img width='100%' alt='size-grid-img'
                                                src={product.length > 0 && product[0].sizeImage.path} />
                                        </div>
                                    </div>
                                }
                                <div className='size'>
                                    {sizes != '' ?
                                        <span>Розмір:</span> : ''}
                                    <br />
                                    {typeof sizes === 'object' &&
                                        sizes.map((value) => <input type='radio'
                                            onClick={(e) => { this.setState({ size: e.target.value }) }}
                                            value={value} name='size' id={`size-${value}`} />)}
                                </div>
                                <div className='counter'>
                                    <Row>
                                        <Col lg={4}>
                                            <div className='button-number'>
                                                <Button onClick={() => { this.setState({ count: this.state.count > 1 ? this.state.count - 1 : this.state.count }) }} id='decrement'>-</Button>
                                                <input type='text' value={this.state.count}></input>
                                                <Button onClick={() => { this.setState({ count: this.state.count + 1 }) }} id='increment'>+</Button>
                                            </div>
                                        </Col>
                                        <Col lg={8}>
                                            <Button type="submit" disabled={sizes.length > 0 && this.state.size === ''} className='order-btn'>
                                                {this.state.size != '' ? 'В КОРЗИНУ' : sizes.length > 0?'Виберіть розмір' : 'В КОРЗИНУ'}</Button>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='description'>
                                    <p>{product.length > 0 && product[0].description}</p>
                                </div>
                                <div className='add-review'>
                                    <Button onClick={() => this.hide_show(null, 'new-review')}>ВІДГУКІВ ({reviews.length >= 0 && reviews.length})</Button>
                                    <div className='hidden' id='new-review'>
                                        <div className='reviews'>
                                            <span>ВІДГУКИ КЛІЄНТІВ</span>
                                            <span style={{ float: 'right', cursor: 'pointer' }} onClick={this.scrollTop}>Написати відгук</span>
                                            {reviews.length > 0 && reviews.map((value) =>
                                                <Row>
                                                    <Col lg={2}>
                                                        <div className='fa fa-user' />
                                                    </Col>
                                                    <Col lg={7}>
                                                        <div>
                                                            {value.rating >= 1 ? <div style={{ color: 'rgb(44, 44, 44)' }} class="fa fa-star" /> :
                                                                <div class="fa fa-star" style={{ color: 'rgb(207, 207, 207)' }} />}
                                                            {value.rating >= 2 ? <div style={{ color: 'rgb(44, 44, 44)' }} class="fa fa-star" /> :
                                                                <div class="fa fa-star" style={{ color: 'rgb(207, 207, 207)' }} />}
                                                            {value.rating >= 3 ? <div style={{ color: 'rgb(44, 44, 44)' }} class="fa fa-star" /> :
                                                                <div class="fa fa-star" style={{ color: 'rgb(207, 207, 207)' }} />}
                                                            {value.rating >= 4 ? <div style={{ color: 'rgb(44, 44, 44)' }} class="fa fa-star" /> :
                                                                <div class="fa fa-star" style={{ color: 'rgb(207, 207, 207)' }} />}
                                                            {value.rating >= 5 ? <div style={{ color: 'rgb(44, 44, 44)' }} class="fa fa-star" /> :
                                                                <div class="fa fa-star" style={{ color: 'rgb(207, 207, 207)' }} />}
                                                        </div>
                                                        <div className='name'>
                                                            {value.name} {value.date}
                                                        </div>
                                                        <div className='text'>
                                                            {value.text}
                                                        </div>
                                                    </Col>
                                                </Row>)}
                                            <AddReview idProduct={this.state.idProduct} />
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </form>
                <hr />
                {recommended_products.length > 0 ?
                <div className='recomended-products'>
                    <h4>РЕКОМЕНДОВАНІ ТОВАРИ</h4>
                    <Row style={{ margin: '25px 0px 25px 0px' }}>
                        {/* NEED FIX TO GET NOT ALL PRODUCTS FROM SERVER  @index < 4@*/}
                        {recommended_products.map((value, index) =>
                            index < 4 &&
                            <Col sm={12} md={3} className='product' >
                                <Product product={value} key={index} />
                            </Col>)}
                    </Row>
                </div>  :
                ''}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log('store---', state);
    return {
        products: state.products.products,
        cartProducts: state.cartProducts.cartProducts,
        recommended_products: state.recommended_products.recommended_products
    };
}
export default connect(mapStateToProps, { getProductById, addProductToCart, getRecommendedProducts })(ProductPage);