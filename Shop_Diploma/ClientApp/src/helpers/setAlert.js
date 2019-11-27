import Alert from '../components/Alert/Alert';
import React from 'react';
import ReactDOM from 'react-dom';

export const setAlert = (props) => {

    const alert = document.getElementById('alert');
    const renderElement = <Alert alert={props} />;

    ReactDOM.render(renderElement, alert);
    const alertFade = document.getElementById('alert-fade');

    const timeout_id = setTimeout(() => {
        alertFade.classList.add('remove');
        setTimeout(() => {
            clearTimeout(timeout_id);
            ReactDOM.unmountComponentAtNode(alert);
        }, 1000);
    }, 5000);
    
}

