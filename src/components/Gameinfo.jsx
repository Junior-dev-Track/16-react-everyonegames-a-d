/* eslint-disable react/prop-types */
import '../styles/_Gameinfo.scss';
import Plateform from "./Plateform.jsx";
import Genres from "./GenresGames.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getApiGameScreenshots, getApiGamesVideoUrl} from "../api/Api.jsx";
import GameComponent from "./GameComponent.jsx";
import {formatDate} from "./DateFormater.jsx";

const Gameinfo = ({gameInfo}) => {

    const [videoUrl, setVideo] = useState([]);
    const [screenshots, setScreenshots] = useState([]);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await getApiGamesVideoUrl(gameInfo.id);
                setVideo(response);
            } catch (error) {
                console.error('Erreur lors de la récupération des vidéos:', error);
            }
        };

        fetchVideo();

        const fetchScreenshots = async () => {
            try {
                const response = await getApiGameScreenshots(gameInfo.id);
                setScreenshots(response.results);
            } catch (error) {
                console.error('Erreur lors de la récupération des screenshots:', error);
            }
        }

        fetchScreenshots();

    }, [gameInfo.id]);

    const MouseEnter = () => {
        setIsHovered(true)
    }


    function MouseLeave() {
        setIsHovered(false)
    }

    return (
        <>
            <article className="bgGames" key={gameInfo.id} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
                <GameComponent gameInfo={gameInfo} videoUrl={videoUrl} screenshots={screenshots} isHovered={isHovered}/>
                <div className="P-L">
                    <Plateform imageInfo={gameInfo.parent_platforms ? gameInfo.parent_platforms : 'N/A'}/>
                    <Link to={`/game/${gameInfo.id}`}><h2>{gameInfo.name}</h2></Link>
                    <div className="gameHide">
                        <div className="release moreInfoGame border">
                            <span className="textInfo">Release date:</span>
                            <span className="moreTextInfo">{gameInfo.released ? formatDate(gameInfo.released) : 'N/A'}</span>
                        </div>
                        <div className="genres moreInfoGame">
                            <span className="textInfo">Genres:</span>
                            <Genres genreInfo={gameInfo.genres ? gameInfo.genres : 'N/A'}/>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}


export default Gameinfo;