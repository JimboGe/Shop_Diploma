import React, { Component } from 'react';
import './Profile.css';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='profile'>
                <h1>МІЙ ОБЛІКОВИЙ ЗАПИС</h1>
                <Row>
                    <Col lg={2}>
                        <Link to="/profile/edit">
                            <i className="fa fa-user"></i>
                            <div>Змінити контактну інформацію</div>
                        </Link>
                    </Col>
                    <Col lg={2}>
                        <Link to="/profile/changePassword">
                            <i className="fa fa-lock"></i>
                            <div>Змінити свій пароль</div>
                        </Link>
                    </Col>
                    <Col lg={2}>
                        <Link to="/profile/changeAddress">
                            <i className="fa fa-map-marker"></i>
                            <div>Змінити мою адресу</div>
                        </Link>
                    </Col>
                    <Col lg={2}>
                        <Link to="/profile/historyOrders">
                            <i className="fa fa-list-alt"></i>
                            <div>Історія покупок</div>
                        </Link>
                    </Col>
                    
                </Row>
            </div>
        );
    }
}

export default Profile