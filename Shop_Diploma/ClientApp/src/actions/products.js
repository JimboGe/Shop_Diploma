import axios from 'axios';
import { GET_PRODUCTS, ADD_PRODUCT_REVIEW, NEW_PRODUCT, DELETE_PRODUCT } from './types';

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
export function addProduct(product) {
  return {
    type: NEW_PRODUCT,
    product: product
  };
}
export function delProduct(id) {
  return {
    type: DELETE_PRODUCT,
    products: id
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
export function addProductReview(review) {
  return dispatch => {
    return axios.post('api/products/newreview', review)
      .then(res => {
        dispatch(addReview(res.data));
      })
  }
}
export function getProductsByParams(gender,category,brand) {
  return dispatch => {
    return axios.get('api/products/ByParams?gender=' + gender + '&category=' + category + '&brand=' + brand)
      .then(res => {
        dispatch(setProducts(res.data));
      })
  }
}

export function newProduct(product) {
  return dispatch => {
    return axios.post('api/products/newproduct', product)
      .then(res => {
        console.log(res.data);
        dispatch(addProduct(res.data));
      })
  }
}
export function deleteProduct(id) {
  return dispatch => {
    return axios.delete('api/products/DeleteProduct/'+ id)
      .then(res => {
        dispatch(delProduct(res.data));
      })
  }
}