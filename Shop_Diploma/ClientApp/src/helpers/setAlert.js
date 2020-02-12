export const setAlert = (props) => {

    const alert = document.getElementById('alert');

    let element = document.createElement('div');
    element.className = `alert alert-${props.type} alert-fade`;
    element.innerHTML = `${props.type === 'danger' ? '<i class="fa fa-exclamation-circle"></i>' :
        '<i class="fa fa-check-circle"></i>'}${props.message}`;

    alert.prepend(element);

    const alertFade = document.getElementsByClassName('alert-fade')[0];

    const timeout_id = setTimeout(() => {
        alertFade.classList.add('remove');
        setTimeout(() => {
            clearTimeout(timeout_id);
            alert.removeChild(element);
        }, 1000);
    }, 5000);

}

