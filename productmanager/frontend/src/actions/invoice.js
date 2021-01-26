import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig, tokenConfig2, tokenConfig3 } from './auth'; // 1 Auth-token 2 Media 3 AllAllow Post

import {ADD_INVOICE, GET_INVOICE} from '../actions/types.js';


// ADD INVOICE
export const addInvoice = invoice =>  (dispatch, getState) => {
    axios.post('/api/invoice/', invoice ,tokenConfig3(getState))
        .then(res => {
            dispatch(createMessage({ addProduct: "Compra exitosa" }));
            dispatch({
                type: ADD_INVOICE,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));} );
};

