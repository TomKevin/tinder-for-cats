import { GET_BREEDS, GET_BREED } from './../types/index';
import { instance } from './../../utils/instance';

export const getBreeds = () => async dispatch => {

    try {

        const response = await instance.get('breeds?page=1&limit=10');

        dispatch({ type: GET_BREEDS, payload: response.data });

        return response.data;
        
    } catch (error) {

        throw error;
        
    }

};

export const getBreedById = (id) => async dispatch => {

    try {

        const response = await instance.get(`breeds/search?q=${id}`);

        console.log(response.data);

        dispatch({ type: GET_BREED, payload: response.data });

        return response.data;
        
    } catch (error) {

        throw error;
        
    }

};