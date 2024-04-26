
import Plateform from "./Plateform.jsx";
import Genres from "./GenresGames.jsx";
import {Link} from "react-router-dom";

const Gameinfo = ({gameInfo}) => {
    return (
        <>

            <article className="bgGames" key={gameInfo.id}>
                <Link to={`game/${gameInfo.id}`}><img className={"imageGame"} src={gameInfo.background_image} alt={gameInfo.name}/></Link>
               <div className="bgGames__infos">
                    <h2>{gameInfo.name}</h2>
                    <p>{gameInfo.released}</p>
                    <Genres genreInfo={gameInfo.genres}/>
                    <Plateform imageInfo={gameInfo.parent_platforms}/>
               </div>
            </article>
        </>
    );
}


export default Gameinfo;