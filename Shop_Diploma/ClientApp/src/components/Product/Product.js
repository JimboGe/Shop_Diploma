import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col } from "react-bootstrap";
import './Product.css';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { product } = this.props;
        console.log(product[0].gender);
        return (
            <Col sm={12} md={3}   className='product' >
                <div style={{ textAlign: 'center' }}>
                    <div className='image-box'>
                        <a href={`/catalog/${product[0].gender}/${product[0].subcategory.name}/${product[0].brand.name}/p${product[0].id}`}>
                            {product[0].images.length > 0 && <img src={product[0].images[0].path}
                                className='first-image'
                                alt='product-img-first' />}
                            {product[0].images.length > 1 && <img src={product[0].images[1].path}
                                className='second-image'
                                alt='product-img-second' />}
                        </a>
                    </div>
                    <div className='description'>
                        <div>
                            <a href={`/catalog/${product[0].gender}/${product[0].subcategory.name}/${product[0].brand.name}/p${product[0].id}`}>
                                {product[0].name}
                            </a>
                        </div>
                        <div className='price'>{product[0].price} грн</div>
                        <div className='size'>
                            <span>{product[0].size}</span>
                        </div>
                        <div>
                            <a href={`/catalog/${product[0].gender}/${product[0].subcategory.name}/${product[0].brand.name}/p${product[0].id}`} className='btn btn-dark'>Замовити</a>
                        </div>
                    </div>
                </div>
            </Col>
        );
    }
}
export default Product