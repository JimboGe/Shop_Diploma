import { GET_PRODUCTS_CART, ADD_PRODUCT_CART, DELETE_PRODUCT_CART } from './types';
let cart = [];

export function setProducts(cartProducts) {
  return {
    type: GET_PRODUCTS_CART,
    cartProducts: cartProducts
  }
}

export function addProduct(cartProduct) {
  return {
    type: ADD_PRODUCT_CART,
    cartProducts: cartProduct
  }
}
export function deleteProduct(id) {
  return {
    type: DELETE_PRODUCT_CART,
    cartProducts: id
  };
}


export function getCartProducts(cart) {
  return dispatch => {
    console.log('---------------------------',cart);
    dispatch(setProducts(cart));
  }
}
export function addProductToCart(cartProduct) {
  return dispatch => {
    let currentStorage = JSON.parse(localStorage.getItem('cart'));
    currentStorage!=null?cart=currentStorage:'';
    cart.push(cartProduct);
    localStorage.setItem('cart', JSON.stringify(cart));
    dispatch(addProduct(cartProduct));
  }
}
export function deleteProductByCart(id) {
  return dispatch => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(cart[id],1);
    localStorage.setItem('cart', JSON.stringify(cart));
    dispatch(deleteProduct(id));
  }
}