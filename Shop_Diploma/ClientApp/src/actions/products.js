import axios from 'axios';
import { GET_PRODUCTS, ADD_PRODUCT_REVIEW } from './types';

export function setProducts(data) {
  return {
    type: GET_PRODUCTS,
    products: data
  }
}
export function addReview(review) {
  return {
    type: ADD_PRODUCT_REVIEW,
    review: review
  };
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
export function addProductReview(review) {
  return dispatch => {
    return axios.post('api/product/addreview', review)
      .then(res => {
        dispatch(addReview(res.data));
      })
  }
}