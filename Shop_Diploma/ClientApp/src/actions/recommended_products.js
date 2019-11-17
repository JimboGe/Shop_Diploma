import axios from 'axios';
import { GET_RECOMMENDED_PRODUCTS } from './types';

export function setRecommendedProducts(data) {
    return {
      type: GET_RECOMMENDED_PRODUCTS,
      recommended_products: data
    }
  }
  export function getRecommendedProducts(category) {
    return dispatch => {
      return axios.get('api/products/ByParams?category=' + category)
        .then(res => {
          dispatch(setRecommendedProducts(res.data));
        })
    }
  }