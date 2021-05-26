import {
     ADD_BOOKING,
     GET_BOOKINGS
} from '../actions/types';

const initialState = {
    user : '',
    bookings : []
}

export default function(state = initialState,action){
    switch(action.type){
        case ADD_BOOKING:
            return {
                ...state,
                bookings : action.payload
            };
        case GET_BOOKINGS:
            console.log('inside getbookings case of reducer');
            console.log(action.payload);
            return {
                ...state,
                bookings : action.payload
            };
        default : 
            return state;
    }
}