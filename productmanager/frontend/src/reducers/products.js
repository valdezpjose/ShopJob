import {GET_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT, GET_ALL_PRODUCTS, GET_PRODUCT} from '../actions/types.js';

const initialState = {
    products: []
}

export default function(state= initialState, action){
    switch(action.type){
        case GET_PRODUCTS:
        case GET_PRODUCT:    
        case GET_ALL_PRODUCTS:
            return{
                ...state, 
                products: action.payload
            };
        case DELETE_PRODUCT:
            return{
                ...state,
                products: state.products.filter(product => product.id !== 
                    action.payload)
            };
        case ADD_PRODUCT:
                return{
                    ...state,
                    products: [...state.products, action.payload]
                };
        default:
            return state;
    }
}
