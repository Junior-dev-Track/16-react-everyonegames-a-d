import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export function getApiList(page) {
    return new Promise((resolve, reject) => {
        axios.get(`${API_URL}games?page=${page}&page_size=20&key=${API_KEY}`)
            .then(response => {
                return resolve(response.data);
            })
            .catch(error => {
                console.log(error);
                return reject(410);
            });
    });
}


export async function getApiGamesId (id) {
    try {
        const {data} = await axios.get(`${API_URL}games/${id}?key=${API_KEY}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getApiGameScreenshots (id) {
    try {
        const {data} = await axios.get(`${API_URL}games/${id}/screenshots?key=${API_KEY}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getApiGamesVideoUrl (id) {
    try {
        const response = await axios.get(`${API_URL}games/${id}/movies?key=${API_KEY}`);
         // Get video URL from response
        return response.data.results[0]?.data['480'];
    } catch (error) {
        console.log(error);
    }
}

export async function getApiGoty() {
    try {
        const {data} = await axios.get(`${API_URL}games?key=${API_KEY}&metacritic=90,100`);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
