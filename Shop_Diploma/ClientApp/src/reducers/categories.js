import { GET_CATEGORIES } from '../actions/types';

const initialState = {
    categories: []
  };

  export default (state = initialState, action = {}) => {
    console.log("Actions: ", action.type, action.categories);
    switch(action.type) {
      case GET_CATEGORIES:
        return {
            categories: action.categories
        };
        default: return state;
    }
  }