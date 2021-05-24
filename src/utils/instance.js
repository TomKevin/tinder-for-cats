import axios from 'axios';

export const instance = axios.create({

    baseURL: 'https://api.thecatapi.com/v1/',

    // timeout: 60000,

    headers: {
        
        'Accept': 'application/json',

        'x-api-key': '47fa7d87-55a5-4988-aa4d-3af637dbce37'
    
    },

    // withCredentials: true

});