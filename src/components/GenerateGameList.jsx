import Gameinfo from "./Gameinfo.jsx";
import { useEffect, useRef, useState } from "react";
import {getApiList} from "../api/Api.jsx";

function GenerateGameList() {
    const [gameList, setGameList] = useState([]);
    const [redirectToErrorPage, setRedirectToErrorPage] = useState(false);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const loader = useRef(null);
    const loadedGameIds = useRef(new Set());

    useEffect(() => {
        const loadInitialData = async () => {
            try {
                const data = await getApiList(page);
                if (data === 410) {
                    setRedirectToErrorPage(true);
                }
                const newGames = data.results.filter(game => !loadedGameIds.current.has(game.id));
                setGameList((prevGameList) => [...prevGameList, ...newGames]);
                newGames.forEach(game => loadedGameIds.current.add(game.id));

            } catch (error) {
                setRedirectToErrorPage(true);
            } finally {
                setLoading(false);
            }
        };
        loadInitialData();

        return () => {}; // Cleanup function
    }, [page]);

    const handleObserver = (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: '50px',
            threshold: 0.5,
        });
        if (loader.current) {
            observer.observe(loader.current);
        }

        return () => observer.disconnect();
    }, []);

    const refresh = () => {
        window.location.reload();
    }

    if (redirectToErrorPage) {
        return (
            <div>
                <h1>Error</h1>
                <p>An error occurred while fetching data from the API.</p>
                <button onClick={refresh}>Refresh</button>
            </div>
        );
    }



    const columns = [[], [], [], []];

    gameList.forEach((game, index) => {
        columns[index % 4].push(
            <Gameinfo gameInfo={game} key={game.id} />
        );
    });


    return (

        <div className="mainBloc">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {columns.map((column, index) => (
                        <div className="column" key={index}>
                            {column}
                        </div>
                    ))}
                </>
            )}
            <div ref={loader}>
                <p>Loading...</p>
            </div>
        </div>
    );
}

export default GenerateGameList;
