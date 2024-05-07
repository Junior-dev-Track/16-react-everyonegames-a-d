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
                <div className="P-L">
                    <Plateform imageInfo={gameInfo.parent_platforms ? gameInfo.parent_platforms : 'N/A'}/>
                    <Link to={`/game/${gameInfo.id}`}><h2>{gameInfo.name}</h2></Link>
                </div>
                <div className="gameHide test">
                    <p className="gameHide">{gameInfo.released ? gameInfo.released : 'N/A'}</p>
                    <Genres genreInfo={gameInfo.genres ? gameInfo.genres : 'N/A'}/>
                </div>
            </article>
        </>
    );
}


export default Gameinfo;