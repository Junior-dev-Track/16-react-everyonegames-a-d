import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export function getApiList() {
    return new Promise((resolve, reject) => {
        axios.get(`${API_URL}games?page_size=6&key=${API_KEY}`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                console.log(error);
                reject(error);
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
        const videoUrl = response.data.results[0]?.data['480']; // Get video URL from response
        return videoUrl;
    } catch (error) {
        console.log(error);
    }
}

/*export async function getApiGenres () {
    try {
        const {data} = await axios.get(`${API_URL}genres?key=${API_KEY}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}
*/