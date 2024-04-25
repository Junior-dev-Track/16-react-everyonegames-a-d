import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function getApiList () {
    try {
        const {data} = await axios.get(`${API_URL}games?key=${API_KEY}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

// https://api.rawg.io/api/games/{id}?key=${API_KEY}
export async function getApiGamesId (id) {
    try {
        const {data} = await axios.get(`${API_URL}games/${id}?key=${API_KEY}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getApiGenres () {
    try {
        const {data} = await axios.get(`${API_URL}genres?key=${API_KEY}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}