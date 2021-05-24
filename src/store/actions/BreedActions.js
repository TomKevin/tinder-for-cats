import { GET_BREEDS } from './../types/index';
import { instance } from './../../utils/instance';

// Get Available Cats
export const getBreeds = () => async dispatch => {

    try {

        const response = await instance.get('breeds?page=1&limit=10');

        dispatch({ type: GET_BREEDS, payload: response.data });

        return response.data;
        
    } catch (error) {

        throw error;
        
    }

};