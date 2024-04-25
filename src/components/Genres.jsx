import './Plateform.css';
import GetGenres from "./Getgenres.jsx";
import {useEffect, useState} from "react";

// eslint-disable-next-line react/prop-types
const Getgenres = ({genreInfo}) => {

    const [genreList, setGenreList] = useState([]);

    useEffect(() => {
        async function getGenreListLoad(){
            const gameGenreList = await GetGenres()
            setGenreList(gameGenreList);
        }

        getGenreListLoad().catch(error => console.error(error));
    }, []);

    console.log(genreList);


    const display_plateform = (genreInfo) => {
        switch (genreInfo) {
            case 1 :
                return 'Action';
            case 2 :
                return 'Action';
            case 3 :
                return 'Action';
            case 4 :
                return 'Action';
            case 5 :
                return 'RPG';
            case 6 :
                return 'Action';
            case 7 :
                return 'Action';
            default :
                return `Need genres ${genreInfo}`;
        }
    }

    return (
        <>
            <div className="genreInfo">
                {/* eslint-disable-next-line react/prop-types */}
                {genreInfo.map(element => (
                    <div key={element.id}>
                        {display_plateform(element.id)}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Getgenres;
