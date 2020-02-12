import React, { Component } from 'react';
import './Search.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { connect } from "react-redux";
import { getProductsByParams } from '../../../actions/products';
import { Row, Col } from "react-bootstrap";
import Product from '../../Product/Product';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emptyContainer: false,
            search_param : ''
        };
    }
    componentDidMount(){
        
        //this.setState({search_param:})
        this.props.getProductsByParams('', '', '', '', '', '', '', '')
            .then(
                () => { this.setState({ emptyContainer: false }) },
                () => { this.setState({ emptyContainer: true }) }
            )
    }
    searchChange = (e) => {
        this.props.getProductsByParams('', '', '', '', '', '', '', e.target.value)
            .then(
                () => { this.setState({ emptyContainer: false }) },
                () => { this.setState({ emptyContainer: true }) }
            )
    }
    render() {
        console.log('tetete',this.props);
        const { products } = this.props;
        const { emptyContainer } = this.state;
        return (
            <div className='search-page'>
                <h2 className='header-page'>Пошук</h2>
                <div className='search-text'>
                    <input type='text' name='search-input' onChange={this.searchChange} placeholder='Пошук...' />
                </div>
                {!emptyContainer &&
                    <Row className='product-container'>
                        {products.map((value, index) =>
                            <Col sm={12} md={3} className='product' >
                                <Product product={value} key={index} />
                            </Col>)}
                    </Row>}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products.products
    };
}
export default connect(mapStateToProps, { getProductsByParams })(Search);