import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig, tokenConfig2 } from './auth';

import {GET_PRODUCTS,DELETE_PRODUCT, ADD_PRODUCT} from './types';

// GET PRODUCTS
export const getProducts = () => (dispatch, getState) => {
    axios.get('/api/products/',tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE PRODUCTS

export const deleteProduct = (id) => (dispatch, getState) => {
    axios.delete(`/api/products/${id}/`,tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteProduct: "Producto Eliminado" }));
            dispatch({
                type: DELETE_PRODUCT,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

// ADD PRODUCTS
export const addProduct = product =>  (dispatch, getState) => {
    axios.post('/api/products/', product ,tokenConfig2(getState))
        .then(res => {
            dispatch(createMessage({ addProduct: "Producto Agregado" }));
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data
            });
        }).catch(err => {
            console.log(err);
            dispatch(returnErrors(err.response.data, err.response.status));} );
};