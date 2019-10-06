import axios from 'axios';
import { SET_CURRENT_USER } from './types';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

export function setCurrentUser(user) {
    return {
      type: SET_CURRENT_USER,
      user
    };
  }
  export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    };
}
const loginByJWT = (token, dispatch) => {
    var user=jwt.decode(token);
    localStorage.setItem('jwtToken', token);
    setAuthorizationToken(token);
    dispatch(setCurrentUser(user));
  } 
export function register(data) {
  return dispatch => {
    return axios.post('api/Account/Register', data)
        .then(res => {
            //console.log("data register", res);
            loginByJWT(res.data, dispatch);
        });
}
}