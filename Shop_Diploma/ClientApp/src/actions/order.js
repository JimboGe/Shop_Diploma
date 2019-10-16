import axios from 'axios';
import { NEW_ORDER } from './types';

export function addOrder(data) {
    return {
      type: NEW_ORDER,
      categories: data
    }
  }

  export function newOrder(order) {
    return dispatch => {
      return axios.post('api/orders/NewOrder', order)
        .then(res => {
          dispatch(addOrder(res.data));
        })
    }
  }