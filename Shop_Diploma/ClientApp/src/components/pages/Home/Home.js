import React, { Component } from 'react';
import './Home.css';
import { CarouselProvider, Slider, Slide, DotGroup, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { connect } from "react-redux";
import Product from '../../Product/Product';
import { getProducts } from '../../../actions/products';
import { Row,Col } from "react-bootstrap";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrImages: ['/img/home/carousel/1big-1920x500.jpg',
        '/img/home/carousel/43-1920x500.jpg',
        '/img/home/carousel/banner-new-size-RU-1920x500.jpg',
        '/img/home/carousel/ru-1920x500.jpg']
    };
  }
  componentDidMount() {
    this.props.getProducts()
      .then(
        () => { },
        (err) => { console.log("Error get data ", err); }
      )
  }
  render() {
    const { products } = this.props;
    return (
      <div>
        <div className='grid' id='grid'>
          <div className='item1'>
            <div className='carousel big' >
              <CarouselProvider hasMasterSpinner={true} isPlaying={true}  interval={7500} 
                                naturalSlideWidth={40} naturalSlideHeight={12} totalSlides={4}>
                <Slider>
                  {this.state.arrImages.map((value, index, arr) =>
                    <Slide index={index} key={index}><Image src={value} /></Slide>)};
                  </Slider>
                <DotGroup className='dot-group' />
              </CarouselProvider>
            </div>
          </div>
          <div className='item item2'>
            <div>
              <a href='/catalog/search?category=bags-backpacks' ><img src='/img/home/backpacks.jpg' alt='backpacks' />
                <div className='tt-description'><span>СУМКИ | РЮКЗАКИ</span></div></a>
            </div>
          </div>
          <div className='item item3'>
            <div>
              <a href='/catalog/search?category=baseball-caps'><img src='/img/home/accessories.jpg' alt='accessories' />
                <div className='tt-description'><span>КЕПКИ</span></div></a>
            </div>
          </div>
          <div className='item item4'>
            <div>
              <a href='/catalog/search?category=outerwear'><img src='/img/home/outerwear.jpg' alt='outerwear' />
                <div className='tt-description'><span>ВЕРХНІЙ ОДЯГ</span></div></a>
            </div>
          </div>
          <div className='item item5'>
            <div>
              <a href='/catalog/search?category=sport-trousers'><img src='/img/home/trousers.jpg' alt='trousers' />
                <div className='tt-description'><span>ШТАНИ</span></div></a>
            </div>
          </div>
          <div className='item item6'>
            <div>
              <a href='/catalog/search?category=hudi'><img src='/img/home/hudi.jpg' alt='hudi' />
                <div className='tt-description'><span>ХУДІ | СВІТШОТИ</span></div></a>
            </div>
          </div>
          <div className='item item7'>
            <div>
              <a href='/catalog/search?category=shoes'><img src='/img/home/shoes.jpg' alt='shoes' />
                <div className='tt-description'><span>ВЗУТТЯ</span></div></a>
            </div>
          </div>
        </div>
        <div style={{textAlign:'center'}}><h3>НОВИНКИ</h3></div>
        <Row>
            <Col xs={8} lg={12}>
              {products.map((value, index) => <Product product={value} key={index} />)}
            </Col>
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
export default connect(mapStateToProps, { getProducts })(Home);