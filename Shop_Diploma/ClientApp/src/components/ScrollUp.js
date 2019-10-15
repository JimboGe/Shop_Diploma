import React, { Component } from 'react';
import './ScrollUp.css';
import { Button } from "react-bootstrap";
import $ from 'jquery';

class ScrollUp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount(){
        window.addEventListener('scroll', this.scroll);
    }
    scroll(e){
        const elem = document.getElementById('scrollUp');
        if(window.pageYOffset > 500){
            elem.setAttribute('class','ScrollUp show');
        }
        else{
            elem.setAttribute('class','ScrollUp tet');
        }
    }
    click(e){
        e.preventDefault();
        $('html,body').animate({scrollTop: 0},1200, 'swing');
    }
    render() {
        return (
            <div className='ScrollUp hide' id='scrollUp' name='scrollUp'>
                <Button onClick = {this.click}><i className="fa fa-angle-up"></i></Button>
            </div>
        );
    }
}

export default ScrollUp
