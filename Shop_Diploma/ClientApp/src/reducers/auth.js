import { SET_CURRENT_USER, CHANGE_USER_NAME } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action = {}) => {
  console.log("ACTION--", action.type, action.userName, state);
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
    case CHANGE_USER_NAME:
      return {
        ...state,
        user: {
          name: action.userName
        }
      };
    default: return state;
  }
}