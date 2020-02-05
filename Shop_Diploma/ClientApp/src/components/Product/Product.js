import React, { Component } from 'react';
import { Col } from "react-bootstrap";
import './Product.css';
import Fade from 'react-reveal/Fade';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getDayOfYear(day) {
        let now = new Date();
        let start = new Date(now.getFullYear(), 0, day);
        let diff = now - start;
        let oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    }

    render() {

        const { product } = this.props;
        const currentDayOfYear = this.getDayOfYear(new Date().getDate());
        //if date from server format == d/m/y
        const dateOfProduct = product[0].date.split('.');
        const searchDayOfYear = this.getDayOfYear(dateOfProduct[0]);
        let newElement = currentDayOfYear > searchDayOfYear - 7 ? <div className='new-product'>NEW</div> : '';
        let sizes = '';
        Array.from(product[0].sizes).map((value, index) => {
            sizes += value;
            if (index < product[0].sizes.length - 1) sizes += ',';
        });


        return (
            
                <div className='product'>
                    <div style={{ textAlign: 'center' }}>
                        <div className='image-box'>
                        {newElement}
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
                                <span>{sizes}</span>
                            </div>
                            <div>
                                <a href={`/catalog/${product[0].gender}/${product[0].subcategory.name}/${product[0].brand.name}/p${product[0].id}`} className='btn btn-dark'>Детальніше</a>
                            </div>
                        </div>
                    </div>
                </div >
            
        );
    }
}

export default Product