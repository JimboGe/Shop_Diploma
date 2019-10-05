import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import './SignIn.css'

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
                        <div className='signin box'>
                            <h4>УВІЙТИ</h4>
                            <p>
                                Увійти в Особистий Кабінет
                            </p>
                            <div className="form-group">
                                <label>E-MAIL</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-Mail" />
                            </div>
                            <div className="form-group">
                                <label>ПАРОЛЬ</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Пароль" />
                            </div>
                            <button type="submit" className="btn btn-dark">УВІЙТИ</button>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='signin box'>
                            <h4>НОВИЙ КЛІЄНТ</h4>
                            <p>Якщо ви ще не реєструвалися на нашому сайті, натисніть кнопку "Зареєструватися".</p>
                           <Link to='/user/signup'><button className="btn btn-dark">РЕЄСТРАЦІЯ</button></Link> 
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default SignIn