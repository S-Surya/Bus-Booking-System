import {
    GET_BUSES
} from '../actions/types';

const initialState = {
    buses : []
}

export default function(state = initialState,action){
    switch(action.type){
        case GET_BUSES:
            console.log('inside bus reducer');
            console.log(action.payload);
            return{
                ...state,
                buses : action.payload
            }
        default : 
            return state;
    }
}