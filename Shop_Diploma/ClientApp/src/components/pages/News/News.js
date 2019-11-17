import React, { Component } from 'react';
import './News.css';
import Product from '../../Product/Product';
import { getNewsProducts } from '../../../actions/products';
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        this.props.getNewsProducts()
            .then(
                () => { },
                (err) => { console.log("Error get data ", err); }
            )
    }

    render() {

        var { products } = this.props;
        console.log(products);
        return (
            <div className='center'>
                <h3>НОВИНКИ</h3>
                <Row>
                        {products.map((value, index) =>
                            <Col sm={12} md={3} className='product' >
                                <Product product={value} key={index} />
                            </Col>)})}
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

export default connect(mapStateToProps, { getNewsProducts })(News);