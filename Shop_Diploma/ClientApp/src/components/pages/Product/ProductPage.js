import React, { Component } from 'react';
import './ProductPage.css';
import { Row, Col, Button } from "react-bootstrap";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, DotGroup, ImageWithZoom, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Product from '../../Product/Product';
import { getProductById } from '../../../actions/products';
import { connect } from "react-redux";

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
            arrImages: ['https://gard.com.ua/image/cache/catalog/shop/products/54a6416c-cbc0-11e8-ab13-ee24cb1b971f-930x1240.jpg',
                'https://gard.com.ua/image/cache/catalog/shop/products/b917841c-ce0e-11e8-ab13-ee24cb1b971f-930x1240.jpg',
                'https://gard.com.ua/image/cache/catalog/shop/products/54a6416b-cbc0-11e8-ab13-ee24cb1b971f-930x1240.jpg',
                'https://gard.com.ua/image/cache/catalog/shop/products/54a6416b-cbc0-11e8-ab13-ee24cb1b971f-930x1240.jpg']
        };
    }
    componentDidMount = () => {
        const id = this.props.match.params.id;
        this.props.getProductById(id)
            .then(
                () => { },
                (err) => { console.log("Error get data ", err); }
            )
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
                alert(id);
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
    imageZoom(type, e) {
        var modal = document.getElementById('modal');
        if (type === 'show') {
            modal.setAttribute('class', 'modal');
            modal.style.display = 'block';
        }
        if (type === 'hide') {
            modal.style.display = 'block';
            modal.setAttribute('class', ' ');
        }
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

    render() {
        const { products } = this.props;
        var product = Object.assign(products);
        var sizes = "";
        if (typeof sizes === 'string') {
            sizes = product.length > 0 ? product[0].size : '';
            sizes = sizes.split(',');
        }
        console.log(sizes);
        return (
            <div className='product-page container'>
                <Row>
                    <Col lg={6}>
                        <div id='modal' className=' '>
                            <CarouselProvider
                                naturalSlideWidth={70}
                                naturalSlideHeight={95}
                                totalSlides={4}>
                                <Slider>
                                    {this.state.arrImages.map((value, index, arr) =>
                                        <Slide key={index} index={index}><ImageWithZoom src={value} /></Slide>)}
                                </Slider>
                                <ButtonBack className='button-move back' />
                                <ButtonNext className='button-move next' />
                                <button onClick={() => this.imageZoom('hide', null)} className='close-modal'><i class="fa fa-times"></i></button>
                                <DotGroup className='dot-group' />
                                <div className='dot-group-image'>
                                    {this.state.arrImages.map((value, index, arr) =>
                                        <Dot slide={index} className='dot-image'>
                                            <Image
                                                src={value}>
                                            </Image>
                                        </Dot>)}
                                </div>
                            </CarouselProvider>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='content'>
                            <div><h2 className='title'>{product.length > 0 && product[0].name}</h2></div>
                            <div><h2 className='price'>{product.length > 0 && product[0].price} грн</h2></div>
                            <div className='review'>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <span>
                                    0 відгуків
                                </span>
                            </div>
                            <div className='size-grid'>
                                <button onClick={(e) => { this.hide_show(e, 'size-grid-div') }}>РОЗМІРНА СІТКА</button>
                                <div id='size-grid-div' className='hidden'>
                                    <img width='100%' alt='size-grid-img'
                                        src={product.length > 0 && product[0].sizeImage.path} />
                                </div>
                            </div>
                            <div className='size'>
                                <span>Розмір:</span><br />
                                {typeof sizes === 'object' &&
                                    sizes.map((value) => <input type='radio' value={value} name='size' id={`size-${value}`} />)}
                            </div>
                            <div className='counter'>
                                <Row>
                                    <Col lg={4}>
                                        <div className='button-number'>
                                            <Button onClick={() => { this.setState({ counter: this.state.counter - 1 }) }} id='decrement'>-</Button>
                                            <input type='text' value={this.state.counter}></input>
                                            <Button onClick={() => { this.setState({ counter: this.state.counter + 1 }) }} id='increment'>+</Button>
                                        </div>
                                    </Col>
                                    <Col lg={8}>
                                        <Button className='order-btn'>Замовити</Button>
                                    </Col>
                                </Row>
                            </div>
                            <div className='description'>
                                <p>{product.description}</p>
                            </div>
                            <div className='add-review'>
                                <Button onClick={() => this.hide_show(null, 'new-review')}>ВІДГУКІВ (0)</Button>
                                <div className='hidden' id='new-review'>
                                    <h3>Написати відгук</h3>
                                    <input type="text" className="form-control" placeholder="Ваше ім'я" />
                                    <textarea className="form-control" placeholder="Ваш відгук" />
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
                                    <Button>ВІДПРАВИТИ ВІДГУК</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <h4 style={{ marginLeft: '75px', marginTop: '70px' }}>РЕКОМЕНДОВАННІ ТОВАРИ</h4>
                    <div style={{ margin: '0px 80px 0px 80px' }} >
                    </div>
                </Row>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products.products
    };
}
export default connect(mapStateToProps, { getProductById })(ProductPage);