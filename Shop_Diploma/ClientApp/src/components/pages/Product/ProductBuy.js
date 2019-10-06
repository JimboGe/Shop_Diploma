import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col } from "react-bootstrap";

import ProductPage from './ProductPage';
import { getProductById } from '../../../actions/products';
import { connect } from "react-redux";

class ProductBuy extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount=()=>{
        const id = this.props.match.params.id;
        this.props.getProductById(id)
        .then(
            () => { },
            (err) => { console.log("Error get data ", err); }
        )
    }
    render() {
        const { products } = this.props;
        return (
            <div className='container'>
                {/* {products.map((value, index, array) =>
                <ProductPage product={value} key={index}/>)} */}
                 <ProductPage product={this.props.products} />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products.products
    };
}
export default connect(mapStateToProps, { getProductById })(ProductBuy)