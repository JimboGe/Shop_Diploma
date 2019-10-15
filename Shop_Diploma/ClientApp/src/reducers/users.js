import { GET_USERS } from "../actions/types";

const initialState = {
  users: []
};

export default (state = initialState, action = {}) => {
    console.log("Actions: ", action.type, action.users);
    switch(action.type) {
      case GET_USERS:
        return {
            users: action.users
        };
        default: return state;
    }
  }