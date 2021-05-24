import axios from 'axios';

export const instance = axios.create({

    baseURL: 'https://api.thecatapi.com/v1/',

    // timeout: 60000,

    headers: {'Accept': 'application/json'},

    // withCredentials: true

});