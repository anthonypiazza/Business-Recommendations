import axios from 'axios';
import {axiosWithAuth} from '../../utils/axiosWithAuth';

export const UPDATE_BUSINESS_START = 'UPDATE_BUSINESS_START';
export const UPDATE_BUSINESS_SUCCESS = 'UPDATE_BUSINESS_SUCCESS';
export const UPDATE_BUSINESS_FAIL = 'UPDATE_BUSINESS_FAIL';


export const bizUpdateListing = (user, id) => dispatch => {
    dispatch({ type: UPDATE_BUSINESS_START })
    axiosWithAuth()
    axios
        .post(`http://localhost:8000/api/biz/listings/update/${id}`, user)
        .then(res => {
            dispatch({ type: UPDATE_BUSINESS_SUCCESS, payload: res.data })
            console.log('UPDATE_BUSINESS_SUCCESS', res.data)
        })
        .catch(err => {
            dispatch({ type: UPDATE_BUSINESS_FAIL, payload: err.response })
            console.log('UPDATE_BUSINESS_FAIL', err.response)
        })
}