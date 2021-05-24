import { GET_FAVOURITES } from './../types/index';

const initialState = {

    data: [],

};

const favouriteReducer = (state = initialState, action) =>  {

    switch(action.type) {

        case GET_FAVOURITES: 

            return {

                ...state,

                data: action.payload

            };

        default:

            return state;

    }

};

export default favouriteReducer;