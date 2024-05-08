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

export async function getApiGameScreenshots(id) {
    let screenshots = localStorage.getItem(`screenshots_${id}`);
    if (screenshots) {
        return JSON.parse(screenshots);
    } else {
        try {
            const { data } = await axios.get(`${API_URL}games/${id}/screenshots?key=${API_KEY}`);
            localStorage.setItem(`screenshots_${id}`, JSON.stringify(data));
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}


export async function getApiGamesVideoUrl (id) {
    let video = localStorage.getItem(`video_${id}`);
    if (video) {
        return JSON.parse(video);
    }
    else {
        try {
            const response = await axios.get(`${API_URL}games/${id}/movies?key=${API_KEY}`);
            const video = response.data.results[0]?.data['480'];


            if (video !== undefined) {
                // Stocker la valeur uniquement si elle n'est pas undefined
                localStorage.setItem(`video_${id}`, JSON.stringify(video));
            } else {
                // Stocker une valeur vide si videoUrl est undefined, sinon erreur console
                localStorage.setItem(`video_${id}`, JSON.stringify(''));
            }


            return video;
        } catch (error) {
            console.log(error);
        }
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
