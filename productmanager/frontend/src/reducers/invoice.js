import {ADD_INVOICE, GET_INVOICE} from '../actions/types.js';

const initialState = {
    invoice: []
}

export default function(state= initialState, action){
    switch(action.type){ 
        case GET_INVOICE:
            return{
                ...state, 
                invoice: action.payload
            };
        case ADD_INVOICE:
                return{
                    ...state,
                    invoice: [...state.products, action.payload]
                };
        default:
            return state;
    }
}
