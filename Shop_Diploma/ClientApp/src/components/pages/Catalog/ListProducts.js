import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Grid } from "react-bootstrap";
import Product from '../../Product/Product';
import './ListProducts.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { getProducts, getProductsByParams } from '../../../actions/products';
import { getCategories } from '../../../actions/categories';
import { connect } from "react-redux";

class ListProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sizeTable: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '36', '36.5', '37', '37.5', '38',
                '38.5', '39', '39.5', '40', '40.5', '41', '41.5', '42', '42.5',
                '43', '43.5', '44', '44.5', '45', '45.5', '46', '46.5', '47'],
            slidervalue: { min: 125, max: 3700 },
            error : ''
        };
    }
    clickAnimation = (e) => {
        const element = e.target;
        const te = document.getElementById(e.target.id + '-menu');
        if (element.getAttribute('class') === 'hide-filter') {
            element.setAttribute('class', 'show-filter');

            te.setAttribute('class', 'visible');
        }
        else {
            element.setAttribute('class', 'hide-filter');
            te.setAttribute('class', 'hidden');
        }
    }
    addHrefsForLinks(linkName) {
        let elements = document.getElementsByClassName(linkName);
        let innerHTML = '';
        let location = document.location.search;
        let path = 'catalog/search';
        let haveLinkName = location.search(linkName);
        let resultHref = '';
        for (let i = 0; i < elements.length; i++) {
            innerHTML = elements[i].getElementsByTagName('span')[0].innerHTML;
            if (haveLinkName < 0)
                resultHref = (location === '') ? path + '?' + linkName + '=' + innerHTML : path + location + '&' + linkName + '=' + innerHTML;
            else {
                resultHref = path + '?' + linkName + '=' + innerHTML;
            }
            elements[i].href = resultHref;
        }
    }
    getProductsByParams() {
        let gender = (new URLSearchParams(this.props.location.search)
            .get("gender")) != null ? (new URLSearchParams(this.props.location.search).get("gender")) : "";
        let brand = (new URLSearchParams(this.props.location.search)
            .get("brand")) != null ? (new URLSearchParams(this.props.location.search).get("brand")) : "";
        let category = (new URLSearchParams(this.props.location.search)
            .get("category")) != null ? (new URLSearchParams(this.props.location.search).get("category")) : "";
        let color = (new URLSearchParams(this.props.location.search)
            .get("color")) != null ? (new URLSearchParams(this.props.location.search).get("color")) : "";
        let size = (new URLSearchParams(this.props.location.search)
            .get("size")) != null ? (new URLSearchParams(this.props.location.search).get("size")) : "";
        let minprice = (new URLSearchParams(this.props.location.search)
            .get("minprice")) != null ? (new URLSearchParams(this.props.location.search).get("minprice")) : "";
        let maxprice = (new URLSearchParams(this.props.location.search)
            .get("maxprice")) != null ? (new URLSearchParams(this.props.location.search).get("maxprice")) : "";
        this.props.getProductsByParams(gender, category, brand, color, size, minprice, maxprice)
            .then(
                () => { },
                (err) => this.setState({error:err.response.data})
            )

        if (gender == null && brand == null && category == null && color == null && size == null && minprice == null && maxprice == null) {
            this.props.getProducts()
                .then(
                    () => { },
                    (err) => { console.log("Error get data ", err); }
                )
        }
    }
    getCategories() {
        this.props.getCategories()
            .then(
                () => { },
                (err) => { console.log("Error get data ", err); }
            )
    }
    checkedLink() {
        const locationHref = (window.location.href);
        let links = document.getElementsByClassName('filter-container')[0].getElementsByTagName('a');
        let parent;
        //довго
        Array.from(links).forEach(element => {
            if (element.href === locationHref) {
                parent = element.parentElement;
                parent.setAttribute('class', 'checked');
            }
        });

    }
    componentDidMount = () => {
        this.getCategories();
        this.addHrefsForLinks('brand');
        this.addHrefsForLinks('size');
        this.addHrefsForLinks('color');
        this.getProductsByParams();
    }
    componentDidUpdate() {
        this.checkedLink();
    }
    createSizeTable(value) {
        return (
            <li>
                <a className='size' href='#'><span>{value}</span></a>
            </li>
        );
    }
    render() {
        var { products, categories } = this.props;
        var categoriesElem;
        const {error, sizeTable} = this.state;
        
        if (categories.length > 0) {
            categoriesElem = (<div className='filter-categories'>
                <div className='title'>
                    <h4>КАТЕГОРІЇ</h4>
                </div>
                <ul className='filter-container'>
                    <li>
                        <a href='/catalog/search?'><i className='fa fa-square-o'></i>ВСІ</a>
                    </li>
                    <li className='has-submenu'>
                        {categories.map(value =>
                            <li className='has-submenu'>
                                <li><a href={`/catalog/search?category=${value[0].name}`}><i className='fa fa-square-o'></i>{value[0].uaName}</a></li>
                                <ul>
                                    {value[0].subcategories.map(subvalue =>
                                        <li><a href={`/catalog/search?category=${subvalue.name}`}><i className='fa fa-square-o'></i>{subvalue.uaName}</a></li>)}
                                </ul>
                            </li>)}
                    </li>
                </ul>
            </div>);

        }
        return (
            <div className='list-products'>
                <Row >
                    <Col xs={7} lg={2} className='filter'>
                        {categoriesElem}
                        <div className='filters'>
                            <div className='title'>
                                <h4>ФІЛЬТРИ</h4>
                            </div>
                            <div className='filter-container'>
                                <h4>Колір</h4>
                                <ul className='list-inline-item'>
                                    <li>
                                        <a className='color' title='Black' style={{ background: 'black' }} href='#'><span>black</span></a>
                                    </li>
                                    <li>
                                        <a className='color' title='Red' style={{ background: 'red' }} href='#'><span>red</span></a>
                                    </li>
                                    <li>
                                        <a className='color' title='Yellow' style={{ background: 'yellow' }} href='#'><span>yellow</span></a>
                                    </li>
                                    <li>
                                        <a className='color' title='White' style={{ background: 'white' }} href='#'><span>white</span></a>
                                    </li>
                                    <li>
                                        <a className='color' title='Orange' style={{ background: 'orange' }} href='#'><span>orange</span></a>
                                    </li>
                                    <li>
                                        <a className='color' title='Gray' style={{ background: 'gray' }} href='#'><span>gray</span></a>
                                    </li>
                                    <li>
                                        <a className='color' title='Blue' style={{ background: 'blue' }} href='#'><span>blue</span></a>
                                    </li>
                                    <li>
                                        <a className='color' title='Green' style={{ background: 'green' }} href='#'><span>green</span></a>
                                    </li>
                                </ul>
                                <h4>Розмір</h4>
                                <ul className='list-inline-item'>
                                   {sizeTable.map(value=>this.createSizeTable(value))}
                                </ul>
                                <h4>Бренд</h4>
                                <ul className='list-inline-item'>
                                    <li>
                                        <a className='brand' href='#'><span>Gard</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col xs={8} lg={10} className='container-products'>
                        <div className='products'>
                            <Row>
                                {!!error?<h1 style={{marginLeft:'25px'}}>{error}</h1>:''}
                                {products.map((value, index) =>
                                    <Product product={value} key={index} />)}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        categories: state.categories.categories
    };
}
export default connect(mapStateToProps, { getProducts, getProductsByParams, getCategories })(ListProducts);