import axios from 'axios';
import { GET_PROFILE, EDIT_PROFILE } from './types';

export function setProfile(data) {
    return {
      type: GET_PROFILE,
      profile : data
    }
  }
  export function putProfile(data) {
    return {
      type: EDIT_PROFILE,
      profile: data
    };
  }

  export function getProfile(id) {
    return dispatch => {
      return axios.get('api/client/GetUserInfoById/'+ id)
        .then(res => {
          dispatch(setProfile(res.data));
        })
    }
  }
  export function editProfile(id,profile) {
    return dispatch => {
      return axios.post('api/client/ProfileEdit/'+ id, profile)
        .then(res => {
          dispatch(putProfile(res.data));
        })
    }
  }
  export function changePassword(data) {
    return dispatch => {
    return axios.post('api/client/ChangePassword', data);
    }
};