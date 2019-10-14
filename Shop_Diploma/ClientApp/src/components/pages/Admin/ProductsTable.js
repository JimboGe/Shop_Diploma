import React, { Component } from 'react';
import { Row,Col } from 'react-bootstrap'
import { getProducts } from '../../../actions/products';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import './ProductsTable.css';

class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    componentDidMount = () => {
        this.props.getProducts()
            .then(
                () => { },
                (err) => { console.log("Error get data ", err); }
            )
    }
    render() {
        let { products } = this.props;
        
        
        
        return (
            <div className='products-table'>
                 <Row className='hr'>
                    <Col lg={1}>
                        <span>Id</span>
                    </Col>
                    <Col lg={1}>
                        <span>Name</span>
                    </Col>
                    <Col lg={1}>
                        <span>Description</span>
                    </Col>
                    <Col lg={1}>
                        <span>Size</span>
                    </Col>
                    <Col lg={1}>
                        <span>Color</span>
                    </Col>
                    <Col lg={1}>
                        <span>Count</span>
                    </Col>
                    <Col lg={1}>
                        <span>Gender</span>
                    </Col>
                    <Col lg={1}>
                        <span>Price</span>
                    </Col>
                    <Col lg={1}>
                        <span>Category</span>
                    </Col>
                    <Col lg={1}>
                        <span>Brand</span>
                    </Col>
                </Row>
                    <Row className='tr'>
                    <Col lg={1}>
                        <span>value.id</span>
                    </Col>
                    <Col lg={1}>
                        <span>value.name</span>
                    </Col>
                </Row>
               
                
            </div>
        )
    }
}
ProductTable.propTypes = {
    products: PropTypes.array.isRequired,
    getProducts: PropTypes.func.isRequired
};
const mapStateToProps = (state) => {
    return {
        products: state.products.products[0]
    };
}
export default connect(mapStateToProps, { getProducts })(ProductTable);