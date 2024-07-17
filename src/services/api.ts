import axios from 'axios';

const { REACT_APP_API_KEY } = process.env;
export const BASE_URL = 'https://api.nytimes.com';
export const API_VERSION = 'v1';
export const API_KEY = REACT_APP_API_KEY;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export async function get(url: string) {
    const response = await axiosInstance.get(url, {
        params: {
            "api-key": API_KEY
        }
    });
    return response;
} 
