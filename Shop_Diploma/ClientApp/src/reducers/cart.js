import {GET_PRODUCTS_CART, ADD_PRODUCT_CART, DELETE_PRODUCT_CART } from '../actions/types';

const initialState = {
    cartProducts: []
};

export default (state = initialState, action = {}) => {
    console.log("Actions: ", action.type, action.cartProducts);
    switch (action.type) {
        case GET_PRODUCTS_CART:
            return {
                cartProducts: action.cartProducts
            };
        case ADD_PRODUCT_CART:
            return {
                ...state,
                cartProducts: [...state.cartProducts, action.cartProducts]
            };
            case DELETE_PRODUCT_CART:
            return {
                ...state,
                cartProducts:  state.cartProducts.filter(item=>item!=state.cartProducts[action.cartProducts])
            };
        default: return state;
    }
}