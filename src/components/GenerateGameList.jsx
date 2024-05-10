import Gameinfo from "./Gameinfo.jsx";
import { useEffect, useRef, useState } from "react";
import {getApiList} from "../api/Api.jsx";
import '../styles/_Generategamelist.scss';

function GenerateGameList() {
    const [gameList, setGameList] = useState([]);
    const [redirectToErrorPage, setRedirectToErrorPage] = useState(false);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const loader = useRef(null);
    const loadedGameIds = useRef(new Set());
    const [sortedBy, setSortedBy] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPlatform, setSelectedPlatform] = useState('');

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

    const sortByCategory = (category) => {
        setSelectedCategory(category);
        setSortedBy('category');
    };

    const sortByPlatform = (platform) => {
        setSelectedPlatform(platform);
        setSortedBy('platform');
    };

    const filterGames = () => {
        let filteredGames = [...gameList];
        if (selectedCategory !== '') {
            filteredGames = filteredGames.filter(game => game.genres.find(genre => genre.name === selectedCategory));
        }
        if (selectedPlatform !== '') {
            filteredGames = filteredGames.filter(game => game.platforms.find(platform => platform.platform.name === selectedPlatform));
        }
        return filteredGames;
    };

    const filteredGames = filterGames();

    const columns = [[], [], [], []];

    filteredGames.forEach((game, index) => {
        columns[index % 4].push(
            <Gameinfo gameInfo={game} key={game.id} />
        );
    });


    return (
        <>
            <div className="filterContainer">
                <div>
                    <label></label>
                    <select className="styled-select" onChange={(e) => sortByCategory(e.target.value)} value={selectedCategory}>
                        <option value="">Category</option>
                        {Array.from(new Set(gameList.flatMap(game => game.genres.map(genre => genre.name)))).map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label></label>
                    <select className="styled-select" onChange={(e) => sortByPlatform(e.target.value)} value={selectedPlatform}>
                        <option value="">Platform</option>
                        {Array.from(new Set(gameList.flatMap(game => game.platforms.map(platform => platform.platform.name)))).map((platform, index) => (
                            <option key={index} value={platform}>{platform}</option>
                        ))}
                    </select>
                </div>
            </div>
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
        </>
    );
}

export default GenerateGameList;
