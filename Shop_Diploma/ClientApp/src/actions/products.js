import axios from 'axios';
import { GET_PRODUCTS } from './types';

export function setProducts(data) {
  return {
    type: GET_PRODUCTS,
    products: data
  }
}
export function getProducts() {
  return dispatch => {
    return axios.get('api/product')
      .then(res => {
        dispatch(setProducts(res.data));
      })
  }
}
export function getProductById(id) {
  return dispatch => {
    return axios.get('api/product/' + id)
      .then(res => {
        dispatch(setProducts(res.data));
      })
  }
}