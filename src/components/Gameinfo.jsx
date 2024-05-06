/* eslint-disable react/prop-types */
import '../styles/_Gameinfo.scss';
import Plateform from "./Plateform.jsx";
import Genres from "./GenresGames.jsx";
import {Link} from "react-router-dom";


const Gameinfo = ({gameInfo}) => {

    return (
        <>
            <article className="bgGames" key={gameInfo.id}>
                <img className="imageGame" src={gameInfo.background_image} alt={gameInfo.name}/>
                <Link to={`game/${gameInfo.id}`}><h2>{gameInfo.name}</h2></Link>
                <p>{gameInfo.released}</p>
                <Genres genreInfo={gameInfo.genres}/>
                <Plateform imageInfo={gameInfo.parent_platforms}/>
            </article>
        </>
    );
}


export default Gameinfo;