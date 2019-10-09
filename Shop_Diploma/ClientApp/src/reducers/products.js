import { GET_PRODUCTS, ADD_PRODUCT_REVIEW, NEW_PRODUCT } from '../actions/types';

const initialState = {
    products: []
  };

  export default (state = initialState, action = {}) => {
    console.log("Actions: ", action.type, action.products);
    switch(action.type) {
      case GET_PRODUCTS:
        return {
          products: action.products
        };
        case ADD_PRODUCT_REVIEW :
          return { 
              ...state,
              products: [...state.products, action.products]
        };
        case ADD_PRODUCT_REVIEW :
          return { 
              ...state,
              products: [...state.products, action.products]
        }
        default: return state;
    }
  }