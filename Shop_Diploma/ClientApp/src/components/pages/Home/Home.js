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
        <div className='grid' id='grid'>
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
               <Link to='/catalog/search?category=backpacks' ><img src='/img/home/backpacks.jpg' alt='backpacks'/>
               <div className='tt-description'><span>СУМКИ | РЮКЗАКИ</span></div></Link>
            </div>
          </div>
          <div className='item item3'>
            <div>
              <Link to='/catalog/search?category=baseball-caps'><img src='/img/home/accessories.jpg' alt='accessories'/>
              <div className='tt-description'><span>КЕПКИ</span></div></Link>
            </div>
          </div>
          <div className='item item4'>
            <div>
              <Link to='/catalog/search?category=outerwear'><img src='/img/home/outerwear.jpg' alt='outerwear'/>
              <div className='tt-description'><span>ВЕРХНІЙ ОДЯГ</span></div></Link>
            </div>
          </div>
          <div className='item item5'>
            <div>
              <Link to='/catalog/search?category=sport-trousers'><img src='/img/home/trousers.jpg' alt='trousers'/>
              <div className='tt-description'><span>ШТАНИ</span></div></Link>
            </div>
          </div>
          <div className='item item6'>
            <div>
              <Link to='/catalog/search?category=hudi'><img src='/img/home/hudi.jpg' alt='hudi'/>
              <div className='tt-description'><span>ХУДІ | СВІТШОТИ</span></div></Link>
            </div>
          </div>
          <div className='item item7'>
            <div>
              <Link to='/catalog/search?category=shoes'><img src='/img/home/shoes.jpg' alt='shoes' />
              <div className='tt-description'><span>ВЗУТТЯ</span></div></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;