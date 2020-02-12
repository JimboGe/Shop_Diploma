import React, { Component } from 'react';
import './TestingPage.css';
import Slide from 'react-reveal/Slide';
import {Row,Col} from "react-bootstrap";

class TestingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <Row className='test'>
                <Col md={3}>
                    <div className='product-tet' style={{ textAlign: 'center' }}>
                        <div className='image-box'>
                            <a href='#'>
                                <img src='https://gard.com.ua/image/cache/catalog/shop/products/6e02da88-d3a0-11e8-ab13-ee24cb1b971f-930x1240.jpg'
                                    className='first-image'
                                    alt='product-img-first' />
                                {/* <img src='https://gard.com.ua/image/cache/catalog/shop/products/6e02da8a-d3a0-11e8-ab13-ee24cb1b971f-930x1240.jpg'
                                    className='second-image'
                                    alt='product-img-second' /> */}
                            </a>
                        </div>
                        <div className='description'>
                            <div>
                                <a href=''>
                                    cata
                                </a>
                            </div>
                            <div className='price'>1234 грн</div>
                            <div className='size'>
                                S,M,L
                            </div>
                            <div>
                                <a className='btn btn-dark'>Детальніше</a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }
}
export default TestingPage;