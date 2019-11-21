import React, { Component } from 'react';
import './Alert.css';



class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(){
        const {alert} = this.props;
        console.log(alert);
        return(
            <div>
               gegegege
            </div>
        );
    }
}

export default Alert;