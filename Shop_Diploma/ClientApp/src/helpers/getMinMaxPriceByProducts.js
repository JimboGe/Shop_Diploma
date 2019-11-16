import axios from 'axios';

export const getMinPriceByProducts=()=>{
   return axios.get('https://localhost:44399/api/products/getPriceByProduct')
         .then(res=>res.data.item1);
}
export const getMaxPriceByProducts=()=>{
    return axios.get('https://localhost:44399/api/products/getPriceByProduct')
         .then(res=>res.data.item2);
}

export const getMinMaxPriceByProducts=()=>{
     return(
        axios.get('https://localhost:44399/api/products/getPriceByProduct').then(res=>{return res})
    );
}