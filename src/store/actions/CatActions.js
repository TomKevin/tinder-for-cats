import { GET_CATS } from './../types/index';
import { instance } from './../../utils/instance';

// Get Available Cats
export const getCats = () => async dispatch => {

    try {

        const response = await instance.get('images/search?limit=10&page=2');

        dispatch({ type: GET_CATS, payload: response.data });

        return response.data;
        
    } catch (error) {

        throw error;
        
    }

};