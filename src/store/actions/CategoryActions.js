import { GET_CATEGORIES } from './../types/index';
import { instance } from './../../utils/instance';

export const getCategories = () => async dispatch => {

    try {

        const response = await instance.get('categories');

        dispatch({ type: GET_CATEGORIES, payload: response.data });

        return response.data;
        
    } catch (error) {

        throw error;
        
    }

};