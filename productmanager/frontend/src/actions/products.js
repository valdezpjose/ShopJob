import axios from 'axios';
import { createMessage } from './messages';

import {GET_PRODUCTS,DELETE_PRODUCT, ADD_PRODUCT,GET_ERRORS} from './types';

// GET PRODUCTS
export const getProducts = () => dispatch => {
    axios.get('/api/products/')
        .then(res => {
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

// DELETE PRODUCTS

export const deleteProduct = (id) => dispatch => {
    axios.delete(`/api/products/${id}/`)
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
export const addProduct = product => dispatch => {
    axios.post('/api/products/', product)
        .then(res => {
            dispatch(createMessage({ addProduct: "Producto Agregado" }));
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data
            });
        }).catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            };
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });
};