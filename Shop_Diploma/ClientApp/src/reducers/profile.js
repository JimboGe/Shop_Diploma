import { GET_PROFILE ,EDIT_PROFILE } from '../actions/types';

const initialState = {
    profile: {}
  };

  export default (state = initialState, action = {}) => {
    console.log("Actions: ", action.type, action.profile);
    switch(action.type) {
      case GET_PROFILE:
        return {
            profile: action.profile
        }
        case EDIT_PROFILE:
          return {
            ...state
          }
        default: return state;
    }
    
  } 