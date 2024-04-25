import './Plateform.css';
import { getApiGenres } from "./../api/Api.jsx";
import {useEffect, useState} from "react";

// eslint-disable-next-line react/prop-types
const Getgenres = ({genreInfo}) => {

    const [genreList, setGenreList] = useState([]);

    useEffect(() => {
        async function getGenreListLoad(){
            const gameGenreList = await getApiGenres();
            setGenreList(gameGenreList);
        }

        getGenreListLoad().catch(error => console.error(error));
    }, []);

    console.log(genreList);


    return genreList
}

export default Getgenres;
