import {combineReducers} from 'redux';
import products from './products';
import errors from './errors';
import messages from './messages';

export default combineReducers({
    products,
    errors,
    messages
});