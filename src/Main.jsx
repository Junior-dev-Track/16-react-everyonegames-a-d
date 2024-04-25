import './Main.css'
import Header from "./pages/Header/Header.jsx";
import { useEffect, useState } from "react";
import { getApiList } from "./api/Api.jsx";
import Gameinfo from "./components/Gameinfo"


function Main() {
    const [gameList, setGameList] = useState([]);

    useEffect(() => {
        async function getGameListLoad(){
            const gameListdata = await getApiList();
            setGameList(gameListdata);
        }

        getGameListLoad().catch(error => console.error(error));
    }, []);


    return (
        <>
            <div className="container">
                <aside className="menu">
                    <Header />
                </aside>
                <div className="mainBloc">
                {gameList.results?.map((game) => (
                    <Gameinfo gameInfo={game} key={game.id}/>
                ))}
                </div>
            </div>


        </>
    )
}

export default Main