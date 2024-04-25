import './Gameinfo.css';
import Plateform from "./Plateform.jsx";
import Genres from "./Genres.jsx";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Gameinfo = ({gameInfo}) => {

    return (
        <>
            <article className="bgGames" key={gameInfo.id}>
                <Link to={`game/${gameInfo.id}`}><img src={gameInfo.background_image} alt={gameInfo.name}/></Link>
                <h2>{gameInfo.name}</h2>
                <p>{gameInfo.released}</p>
                <Genres genreInfo={gameInfo.genres}/>
                <Plateform imageInfo={gameInfo.parent_platforms}/>
            </article>
        </>
    );
}


export default Gameinfo;