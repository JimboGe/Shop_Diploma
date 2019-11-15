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
            error: '',
            currentGender: ''
        };
    }
    componentDidUpdate() {
        this.addHrefsForLinks();
        this.setActiveFilter();
    }

    componentDidMount = () => {
        this.getCurrentGender();
        this.getCategories();
        this.getProductsByParams();
    }

    addHrefsForLinks() {
        const container = document.getElementsByClassName('filter')[0];
        let links = Array.from(container.getElementsByTagName('a'));
        let location, value, classType, localHref, word;
        console.log('search----', document.location.search);
        links.forEach(link => {
            //value = categoryName, color, size, brandName(shirts,black,S..)
            value = link.getElementsByTagName('span')[0].getAttribute('checked-value');

            //classType = category,color,brand...
            classType = link.getAttribute('class');

            //?brand=man&category=shirts...
            location = document.location.search;

            //classType = category, word = shirts --- ?category=shirts/
            word = new URLSearchParams(location).get(classType);

            localHref = `/catalog/search${location}`;
            //If selected Filter Category - ALL, we dont show in the Url	
            if (value != 'all') {
                //if the word(category) is not found - we write category and value in the url
                if (location.indexOf(classType) === -1) {
                    link.href = localHref.indexOf('?') !== -1 ? `${localHref}&${classType}=${value}` : `${localHref}?${classType}=${value}`;
                }
                else {
                    location = location.replace(word, value);
                    localHref = `/catalog/search${location}`;
                    link.href = localHref;
                    if (link.parentElement.getAttribute('class') === 'checked') {
                        location = location.indexOf(`&${classType}=${word}`) > 0 ? location.replace(`&${classType}=${word}`, '') : location;
                        location = location.indexOf(`${classType}=${word}&`) > 0 ? location.replace(`${classType}=${word}&`, '') : location;
                        location = location.indexOf(`${classType}=${word}`) > 0 ? location.replace(`${classType}=${word}`, '') : location;
                        localHref = `/catalog/search${location}`;
                        link.href = localHref;
                    }
                }
            }

        });
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
                (err) => this.setState({ error: err.response.data })
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

    setActiveFilter() {
        const location = document.location.search;
        let value, classType, typeUrlSearch;
        let filters = Array.from(document.getElementsByClassName('filter-container'));

        filters.forEach(item =>
            Array.from(item.getElementsByTagName('a')).forEach(child => {
                value = child.getElementsByTagName('span')[0].getAttribute('checked-value');
                classType = child.getAttribute('class');
                typeUrlSearch = new URLSearchParams(location).get(classType);
                if (typeUrlSearch != null)
                    value === typeUrlSearch ? child.parentElement.setAttribute('class', 'checked') : '';
                else
                    value === 'all' ? child.parentElement.setAttribute('class', 'checked') : '';
            })
        );
    }

    getCurrentGender = () => {
        let location = document.location.search;
        let search = location.match('gender');
        let gender = location.match('gender=woman');
        this.setState({
            currentGender: search != null ? gender != null ? 'woman' : 'man' : ''
        });
    }

    createSizeTable(value) {
        return (
            <li>
                <a className='size' href='#'><span checked-value={value}>{value}</span></a>
            </li>
        );
    }

    createCategories(currentGender, categories) {
        return (
            <div>
                <div className='title'>
                    <h4>КАТЕГОРІЇ</h4>
                </div>
                <ul className='filter-container'>
                    <li >
                        <a className='category' href={`/catalog/search?${currentGender !== '' ? 'gender=' + currentGender : ''}`}>
                            <i className='fa fa-square-o'></i>
                            <span checked-value='all'>ВСЕ</span>
                        </a>
                    </li>
                    <li className='has-submenu'>
                        {categories.map(value =>
                            <li className='has-submenu'>
                                <li>
                                    <a className='category' href={`/catalog/search?category=${value[0].name}`} >
                                        <i className='fa fa-square-o'></i>
                                        <span checked-value={value[0].name}>{value[0].uaName}</span>
                                    </a>
                                </li>
                                <ul>
                                    {value[0].subcategories.map(subvalue =>
                                        subvalue.gender === 'all' &&
                                        <li>
                                            <a className='category' href={`/catalog/search?category=${subvalue.name}`}>
                                                <i className='fa fa-square-o'></i>
                                                <span checked-value={subvalue.name}>{subvalue.uaName}</span>
                                            </a>
                                        </li>)}
                                    {value[0].subcategories.map(subvalue =>
                                        subvalue.gender === currentGender && subvalue.gender != 'all' &&
                                        <li>
                                            <a className='category' href={`/catalog/search?category=${subvalue.name}`}>
                                                <i className='fa fa-square-o'></i>
                                                <span checked-value={subvalue.name}>{subvalue.uaName}</span>
                                            </a>
                                        </li>)}
                                    {currentGender === '' &&
                                        value[0].subcategories.map(subvalue =>
                                            subvalue.gender != 'all' &&
                                            <li>
                                                <a className='category' href={`/catalog/search?category=${subvalue.name}`}>
                                                    <i className='fa fa-square-o'></i>
                                                    <span checked-value={subvalue.name}>{subvalue.uaName}</span>
                                                </a>
                                            </li>)}
                                </ul>
                            </li>)}
                    </li>
                </ul>
            </div>);
    }

    render() {

        let { products, categories} = this.props;
        const { error, sizeTable, currentGender } = this.state;
        let categoriesElem = this.createCategories(currentGender, categories);
        return (
            <div className='list-products'>
                <Row>
                    <Col xs={7} lg={2} className='filter'>
                        <div className='filter-genders'>
                            <div className='title'>
                                <h4>СТАТЬ</h4>
                            </div>
                                <ul className='filter-container'>
                                    <li>
                                        <a className='gender' href='#'>
                                            <i className='fa fa-square-o'></i>
                                            <span checked-value='man'>ЧОЛОВІЧА</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className='gender' href='#'>
                                            <i className='fa fa-square-o'></i>
                                            <span checked-value='woman'>ЖІНОЧА</span>
                                        </a>
                                    </li>
                                </ul>
                        </div>
                        <div className='filter-categories'>
                            {categoriesElem}
                        </div>
                        <div className='filters'>
                            <div className='title'>
                                <h4>ФІЛЬТРИ</h4>
                            </div>
                            <div className='filter-container'>
                                <h4>Колір</h4>
                                <ul className='list-inline-item'>
                                    <li>
                                        <a className='color' title='Black' style={{ background: 'black' }} href='#'><span checked-value='black'>black</span></a>
                                    </li>
                                    <li>
                                        <a className='color' title='Red' style={{ background: 'red' }} href='#'><span checked-value='red'>red</span></a>
                                    </li>
                                    <li>
                                        <a className='color' title='Yellow' style={{ background: 'yellow' }} href='#'><span checked-value='yellow'>yellow</span></a>
                                    </li>
                                    <li>
                                        <a className='color' title='White' style={{ background: 'white' }} href='#'><span checked-value='white'>white</span></a>
                                    </li>
                                    <li>
                                        <a className='color' title='Orange' style={{ background: 'orange' }} href='#'><span checked-value='orange'>orange</span></a>
                                    </li>
                                    <li>
                                        <a className='color' title='Gray' style={{ background: 'gray' }} href='#'><span checked-value='gray'>gray</span></a>
                                    </li>
                                    <li>
                                        <a className='color' title='Blue' style={{ background: 'blue' }} href='#'><span checked-value='blue'>blue</span></a>
                                    </li>
                                    <li>
                                        <a className='color' title='Green' style={{ background: 'green' }} href='#'><span checked-value='green'>green</span></a>
                                    </li>
                                </ul>
                                <h4>Розмір</h4>
                                <ul className='list-inline-item'>
                                    {sizeTable.map(value => this.createSizeTable(value))}
                                </ul>
                                <h4>Бренд</h4>
                                <ul className='list-inline-item'>
                                    <li>
                                        <a className='brand' href='#'><span checked-value='Gard'>Gard</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col xs={8} lg={10} className='container-products'>
                        <div className='products'>
                            <Row>
                                {!!error ? <h1 style={{ marginLeft: '25px' }}>{error}</h1> : ''}
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
export default connect(mapStateToProps, { getProducts, getProductsByParams, getCategories})(ListProducts);