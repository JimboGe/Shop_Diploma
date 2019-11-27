import React, { Component } from 'react';
import './Alert.css';
import Fade from 'react-reveal/Fade';

class Alert extends Component {
    render() {
        const { alert } = this.props;
        return (
            <Fade>
                <div id='alert-fade' className={`alert alert-${alert.type}`}>
                    {alert.type === 'danger' ? <i class="fa fa-exclamation-circle"></i> : <i class="fa fa-check-circle"></i>}
                    {alert.message}
                </div>
            </Fade>
        );
    }
}
export default Alert;