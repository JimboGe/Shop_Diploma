import { GET_PRODUCTS } from '../actions/types';

const initialState = {
    products: []
  };

  export default (state = initialState, action = {}) => {
    console.log("Actions: ", action.type, action.products);
    switch(action.type) {
      case GET_PRODUCTS:
        return {
          products: action.products
        }
        default: return state;
    }
  }