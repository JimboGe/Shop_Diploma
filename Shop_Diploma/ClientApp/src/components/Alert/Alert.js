import React, { Component } from 'react';
import './Alert.css';
import Fade from 'react-reveal/Fade';

class Alert extends Component {  
    render() {
        const { alert } = this.props;
        return (
            <Fade>
                <div id='alert-fade' className={`alert alert-${alert.type}`}>
                    {alert.message}
                </div>
            </Fade>
        );
    }
}
export default Alert;