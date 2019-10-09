import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Breadcrumb } from "react-bootstrap";
import './BreadCrumbs.css';

class BreadCrumbs extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Breadcrumb >
                <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}

export default BreadCrumbs