import axios from "axios";
import * as types from './types'


export const setProduct = () => {
  return (dispatch, getState) => {
    try {
      const response = await axios.get('/product');
      dispatch({
        type: types.FETCH_PRODUCTS,
        payload: response
      })
    } catch (error) {
      console.error(error);
    }
  }
}
