import React, { Component } from 'react';
import './TestingPage.css';
import Slide from 'react-reveal/Slide';

class TestingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
   
    
    render() {
        return (
            <Slide top duration={400} mirror>
                <div >
                    <img className='animation-product' src='https://cdn.thesolesupplier.co.uk/2018/10/Off-White-x-Nike-Zoom-Fly-SP-Black.png' alt=''/>
                </div>
            </Slide >
        );
    }
}
export default TestingPage;