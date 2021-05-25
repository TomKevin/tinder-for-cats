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

export const addFavourite = data => async dispatch => {

    try {

        const response = await instance.post(`favourites`, data);

        return response.data;
        
    } catch (error) {

        throw error;
        
    }

};

export const deleteFavourite = id => async dispatch => {

    try {

        console.log(id);

        const response = await instance.delete(`favourites/${id}`);

        console.log(response)

        return response.data;
        
    } catch (error) {

        throw error;
        
    }

};