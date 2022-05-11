import axios from "axios";
import * as types from './types'


export const setProduct = () => {
  return (dispatch, getState) => {
    try {
      axios.get('/api/product').then((response) => {
        dispatch({
          type: types.FETCH_PRODUCTS,
          payload: response.data
        })
    });
      
    } catch (error) {
      console.error(error);
    }
  }
}

