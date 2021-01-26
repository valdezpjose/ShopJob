import {combineReducers} from 'redux';
import products from './products';
import errors from './errors';
import messages from './messages';
import auth from './auth';
import cart from './cart';
import invoice from './invoice';

export default combineReducers({
    products,
    errors,
    messages,
    auth,
    cart,
    invoice
});