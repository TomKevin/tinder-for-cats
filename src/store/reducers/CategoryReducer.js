import { GET_CATEGORIES } from './../types/index';

const initialState = {

    data: [],

};

const categoryReducer = (state = initialState, action) =>  {

    switch(action.type) {

        case GET_CATEGORIES: 

            return {

                ...state,

                data: action.payload

            };

        default:

            return state;

    }

};

export default categoryReducer;