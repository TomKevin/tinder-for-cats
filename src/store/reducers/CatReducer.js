import { GET_CATS } from './../types/index';

const initialState = {

    data: [],

};

const catReducer = (state = initialState, action) =>  {

    switch(action.type) {

        case GET_CATS: 

            return {

                ...state,

                data: action.payload

            };

        default:

            return state;

    }

};

export default catReducer;