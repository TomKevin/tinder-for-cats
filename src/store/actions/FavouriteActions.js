import { GET_FAVOURITES } from './../types/index';
import { instance } from './../../utils/instance';

export const getFavourites = () => async dispatch => {

    try {

        const response = await instance.get('favourites');

        dispatch({ type: GET_FAVOURITES, payload: response.data });

        return response.data;
        
    } catch (error) {

        throw error;
        
    }

};