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
    return axios.get('api/products/All')
      .then(res => {
        dispatch(setProducts(res.data));
      })
  }
}
export function getProductById(id) {
  return dispatch => {
    return axios.get('api/products/ById/' + id)
      .then(res => {
        dispatch(setProducts(res.data));
      })
  }
}
export function getProductByBrand(brand) {
  return dispatch => {
    return axios.get('api/products/ByBrand/' + brand)
      .then(res => {
        dispatch(setProducts(res.data));
      })
  }
}
export function getProductByGender(gender) {
  return dispatch => {
    return axios.get('api/products/ByGender/' + gender)
      .then(res => {
        dispatch(setProducts(res.data));
      })
  }
}
export function getProductByCategory(category) {
  return dispatch => {
    return axios.get('api/products/ByCategory/' + category)
      .then(res => {
        dispatch(setProducts(res.data));
      })
  }
}
export function addProductReview(review) {
  return dispatch => {
    return axios.post('api/products/addreview', review)
      .then(res => {
        dispatch(addReview(res.data));
      })
  }
}