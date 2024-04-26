import Header from "../Header/Header";
import { getApiGamesId } from "../../api/Api";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";


// eslint-disable-next-line react/prop-types
function Gameunique() {
    const [gameId, setGameId] = useState({});
    const {id} = useParams();

    useEffect(() => {
        async function getGameLoad(id) {
            const gameData = await getApiGamesId(id);
            setGameId(gameData);
        }

        getGameLoad(id).catch(error => console.error(error));
    }, [id]);


    return (
        <>
            <h1>{gameId.id}</h1>
            <div className="container">
                <aside className="menu">
                    <Header/>
                </aside>
                <div className="mainBloc">
                    <img src={gameId.background_image} alt={gameId.name}/>
                    <>{gameId.description}</>
                </div>
            </div>
        </>
    )

}

export default Gameunique;