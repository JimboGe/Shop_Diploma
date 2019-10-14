import axios from 'axios';
import { GET_USERS} from './types';

export function setUsers(users) {
  return {
    type: GET_USERS,
    users
  };
}


export function getUsers() {
  return dispatch => {
      return axios.get('api/admin/getUsers/')
      .then(res => {
        dispatch(setUsers(res.data));
      });
  }
}
