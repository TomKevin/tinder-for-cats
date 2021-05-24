import { GET_BREEDS } from './../types/index';

const initialState = {

    data: [],

};

const breedReducer = (state = initialState, action) =>  {

    switch(action.type) {

        case GET_BREEDS: 

            return {

                ...state,

                data: action.payload

            };

        default:

            return state;

    }

};

export default breedReducer;