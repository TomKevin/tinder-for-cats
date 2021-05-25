import { GET_BREEDS, GET_BREED } from './../types/index';

const initialState = {

    data: [],

    breed: {}

};

const breedReducer = (state = initialState, action) =>  {

    switch(action.type) {

        case GET_BREEDS: 

            return {

                ...state,

                data: action.payload

            };
        
        case GET_BREED:

            return {

                ...state,

                breed: action.payload

            };

        default:

            return state;

    }

};

export default breedReducer;