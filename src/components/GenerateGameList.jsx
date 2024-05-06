import Gameinfo from "./Gameinfo.jsx";
import {useEffect, useState} from "react";
import {getApiList} from "../api/Api.jsx";


function GenerateGameList() {

    const [gameList, setGameList] = useState([]);
    const [redirectToErrorPage, setRedirectToErrorPage] = useState(false);
    let [errorApi = [], setErrorApi] = useState([]);

    useEffect(() => {
        getApiList()
            .then(data => setGameList(data))
            .catch(error => {
                setErrorApi(error);
                setRedirectToErrorPage(true);
            });
    }, []);


    if (redirectToErrorPage) {
        return (
            <div>
                <h1>Erreur</h1>
                <p>Une erreur est survenue lors de la récupération des données via l&amp:apos;API. </p>
                <p>{errorApi}</p>
            </div>
        );
    }


    return (
        <div className="mainBloc">
            {gameList.results?.map((game) => (
                <Gameinfo gameInfo={game} key={game.id}/>
            ))}
        </div>
    );
}

export default GenerateGameList;