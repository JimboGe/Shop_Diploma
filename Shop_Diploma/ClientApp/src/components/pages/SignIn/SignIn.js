import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import './SignIn.css'
import SignInForm from './SignInForm';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='container sign'>
                <Row>
                    <Col xs={12} md={6}>
                        <SignInForm/>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='signin box'>
                            <h4>НОВИЙ КЛІЄНТ</h4>

                            <p>Якщо ви ще не реєструвалися на нашому сайті, натисніть кнопку "Зареєструватися".</p>

                           <Link to='/account/signup'><button className="btn btn-dark">РЕЄСТРАЦІЯ</button></Link> 
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default SignIn