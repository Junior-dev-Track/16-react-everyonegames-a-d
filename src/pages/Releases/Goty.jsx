import Aside from "../../components/Aside";
import Header from "../Header/Header";
import {useEffect, useState} from "react";
import {getApiGoty} from "../../api/Api.jsx";
import Plateform from "../../components/Plateform";
import Genres from "../../components/GenresGames";
import {Link} from "react-router-dom";
import '../../styles/_Gameinfo.scss';

function Goty() {
    const [gotyGames, setgotyGames] = useState([]);

    useEffect(() => {
        async function getGotyLoad() {
            const gameData = await getApiGoty();
            console.log("GameData:", gameData);
            setgotyGames(gameData);
        }

        getGotyLoad().catch(error => console.error(error));
        }, []);
    return (
        <>
            <Header/>
            <div className="container">
                <div className="flexBox">
                    <Aside/>
                    <main>
                        <h1>GAME OF THE YEARS (2023-2024)</h1>
                        <p>Metacritics min 90% and released in 2023-2024.</p>

                        {gotyGames.results?.map(gameInfo => {
                            const releasedYear = new Date(gameInfo.released).getFullYear();
                            if ((releasedYear > 2010 && releasedYear <= 2024) && gameInfo.metacritic >= 80) {
                                return (
                                    <>
                                    <div className="mainBloc">
                                    <article className="bgGames" key={gameInfo.id}>
                                        <img className="imageGame" src={gameInfo.background_image} alt={gameInfo.name}/>
                                        <div className="P-L">
                                            <Plateform
                                                imageInfo={gameInfo.parent_platforms ? gameInfo.parent_platforms : 'N/A'}/>
                                            <Link to={`/game/${gameInfo.id}`}><h2>{gameInfo.name}</h2></Link>
                                        </div>
                                        <div className="gameHide test">
                                            <p className="gameHide">{gameInfo.released ? gameInfo.released : 'N/A'}</p>
                                            <Genres genreInfo={gameInfo.genres ? gameInfo.genres : 'N/A'}/>
                                        </div>
                                    </article>
                                    </div>
                                    </>
                                );
                            } else {
                                return null;
                            }
                        })}


                    </main>
                </div>
            </div>
        </>
    );
}

export default Goty;