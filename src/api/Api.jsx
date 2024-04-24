import axios from 'axios';

import API_URL from '../.env';

export async function getApiList (){
    try {
        const {data} = await axios.get (`${API_URL}apilist`);
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}
