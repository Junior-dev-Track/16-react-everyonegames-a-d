import Aside from "../../components/Aside";
import Header from "../Header/Header";
import {useEffect, useState} from "react";
import {getApiGamesVideoUrl, getApiGoty} from "../../api/Api.jsx";
import '../../styles/_Gameinfo.scss';
import Gameinfo from "../../components/Gameinfo.jsx";
import Footer from "../Footer/Footer.jsx";

function Goty() {
    const [gotyGames, setgotyGames] = useState([]);

    useEffect(() => {
        async function getGotyLoad() {
            const  gameData  = await getApiGoty();
            console.log(gameData);
            setgotyGames(gameData.results);
        }

        getGotyLoad().catch(error => console.error(error));
        }, []);

    const [videoUrl, setVideo] = useState([]);

    const columns = [[], [], [], []];

    gotyGames.forEach((game, index) => {
        columns[index % 4].push(
            <Gameinfo gameInfo={game} key={game.id} />
        );
    });

            return (
        <>
            <Header/>
            <div className="container">
                <div className="flexBox">
                    <Aside/>
                    <main>
                        <h1>Game of the Year (2010 - Today)</h1>
                        <div className="mainBloc">
                            <>
                                {columns.map((column, index) => (
                                    <div className="column" key={index}>
                                        {column}
                                    </div>
                                ))}
                            </>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </>
            );
}

export default Goty;