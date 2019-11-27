let counter = 0;

export const setAlert = (props) => {

    counter++;
    const alert = document.getElementById('alert');

    let element = document.createElement('div');
    element.className = `alert alert-${props.type} alert-fade`;
    element.style.top = (75 * counter) + 'px';
    element.innerHTML = `${props.type === 'danger' ? '<i class="fa fa-exclamation-circle"></i>' :
        '<i class="fa fa-check-circle"></i>'}${props.message}`;

    alert.append(element);

    const alertFadeLength = document.getElementsByClassName('alert-fade').length - 1;
    const alertFade = document.getElementsByClassName('alert-fade')[alertFadeLength];

    const timeout_id = setTimeout(() => {
        alertFade.classList.add('remove');
        setTimeout(() => {
            clearTimeout(timeout_id);
            alert.removeChild(element);
        }, 1000);
    }, 5000);

}

