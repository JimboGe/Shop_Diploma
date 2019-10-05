import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, DotGroup, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

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

  render() {
    return (
      <div>
        <div className='grid'>
          <div className='item1'>
            <div className='carousel big' >
               <CarouselProvider naturalSlideWidth={70} naturalSlideHeight={20} totalSlides={4}>
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
              <Link to='#'><img src='/img/home/backpacks.jpg' alt='backpacks'/></Link>
            </div>
          </div>
          <div className='item item3'>
            <div>
              <Link to='#'><img src='/img/home/accessories.jpg' alt='accessories'/></Link>
            </div>
          </div>
          <div className='item item4'>
            <div>
              <Link to='#'><img src='/img/home/outerwear.jpg' alt='outerwear'/></Link>
            </div>
          </div>
          <div className='item item5'>
            <div>
              <Link to='#'><img src='/img/home/shtani.jpg' alt='trousers'/></Link>
            </div>
          </div>
          <div className='item item6'>
            <div>
              <Link to='#'><img src='/img/home/hudi.jpg' alt='hudi'/></Link>
            </div>
          </div>
          <div className='item item7'>
            <div>
              <Link to='/cart'><img src='/img/home/shoes.jpg' alt='shoes' /></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;