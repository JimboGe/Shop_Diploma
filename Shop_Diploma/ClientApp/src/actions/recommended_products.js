import axios from 'axios';
import { GET_RECOMMENDED_PRODUCTS } from './types';

export function setRecommendedProducts(data) {
  return {
    type: GET_RECOMMENDED_PRODUCTS,
    recommended_products: data
  }
}
export function getRecommendedProducts(category,currentProductId) {
  return dispatch => {
    return axios.get('api/products/ByParams?category=' + category)
      .then(res => {
        res.data = res.data.filter(function (value) { if (value[0].id != currentProductId) return value });
        console.log('res-data', res.data);
        dispatch(setRecommendedProducts(res.data));
      })
  }
}