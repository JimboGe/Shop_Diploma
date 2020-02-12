import axios from 'axios';

function createOptions(name, data) {
    try {
        data.map((value) => {
            var options = document.createElement('option');
            var select = document.getElementById(name);
            options.appendChild(document.createTextNode(value.Description));
            select.appendChild(options);
        })
    }
    catch (ex) { console.log(ex) }
}

export function getCities(){
    var settings = {
        "url": "https://api.novaposhta.ua/v2.0/json/",
        data: {
            modelName: 'Address',
            calledMethod: 'getCities'
        }
    }
   return axios.post(settings.url, settings.data).then(res=>{createOptions('city', res.data.data);});
}

export function getRegions() {
    var settings = {
        "url": "https://api.novaposhta.ua/v2.0/json/",
        data: {
            modelName: 'Address',
            calledMethod: 'getAreas'
        }
    }
   return axios.post(settings.url, settings.data).then(res => {createOptions('region', res.data.data);});
}
