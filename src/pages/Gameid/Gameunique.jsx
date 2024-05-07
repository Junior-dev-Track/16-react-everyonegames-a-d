import Header from "../Header/Header";
import { getApiGamesId, getApiGamesVideoUrl, getApiGameScreenshots } from "../../api/Api";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Aside from "../../components/Aside.jsx";
import '../../styles/_Gameunique.scss';
import Plateform from "../../components/Plateform.jsx";

// fonction qui affiche un bouton read more
const GameDescription = ({ description }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    // Check if description is defined before using slice
    const slicedDescription = description ? description.slice(0, 300) : '';

    return (
        <div className="gameu__about">
            <h2>About</h2>
            <div className="gameu__about-description">
                <p>
                    {showFullDescription ? description : slicedDescription}
                </p>
                {description && description.length > 300 && (
                    <button onClick={toggleDescription}>
                        {showFullDescription ? 'Read less' : 'Read more'}
                    </button>
                )}
            </div>
        </div>
    );
};

//fonction qui retourne l url de la video si elle existe
function VideoUrlReturn() {
    const [videoUrl, setVideoUrl] = useState("");
    const {id} = useParams();
    useEffect(() => {
        async function getGameVideoLoad(id) {
            const gameVideoLink = await getApiGamesVideoUrl(id);
            setVideoUrl(gameVideoLink);
        }

        getGameVideoLoad(id).catch(error => console.error(error));
    }, [id]);
    return (
        <>
            {videoUrl ? (
                <div className="gameu__video">
                    <video className="game-card-video__video" controls>
                        <source src={videoUrl} type="video/mp4"/>
                    </video>
                </div>
            ) : (
                <div className="gameu__novideo"></div>
            )}
        </>
    );
}

// Fonction pour formater la date
    function formatDate(dateString) {
        const dateconversion = { year: 'numeric', month: 'short', day: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', dateconversion);
    }

// eslint-disable-next-line react/prop-types
function Gameunique() {
    const [gameId, setGameId] = useState({});
    const [screenshots, setScreenshots] = useState([]); // State to store screenshots
    const {id} = useParams();

    useEffect(() => {
        async function getGameLoad(id) {
            const gameData = await getApiGamesId(id);
            setGameId(gameData);
            // Fetch screenshots
            const screenshotsData = await getApiGameScreenshots(id);
            setScreenshots(screenshotsData.results);
        }

        getGameLoad(id).catch(error => console.error(error));
    }, [id]);

    return (
        <>
            <Header/>
            <div className="container">
                <div className="flexBox">
                    <Aside/>
                    <div className="gameu__content-wrap">
                        <div className="gameu__content-colonne">
                            <div className="gameu__content-firstcol">
                                <div className="gameu__head">
                                    <div className="gameu__head-meta">
                                        <div className="gameu__head-metadate">{formatDate(gameId.released)}</div>
                                        <div className="gameu__head-metaicons">
                                            <Plateform
                                                imageInfo={gameId.parent_platforms ? gameId.parent_platforms : []}/>
                                        </div>
                                        <div className="gameu__head-metaplayedtime">
                                            AVERAGE PLAYTIME : {gameId.playtime} HOURS
                                        </div>
                                    </div>
                                    <h1>{gameId.name}</h1>

                                </div>
                                <div className="gameu__rating">
                                    <div className="gameu__rating-left">
                                        {gameId.ratings?.[0]?.title}
                                    </div>
                                    <div className="gameu__rating-center">

                                    </div>
                                    <div className="gameu__rating-right">

                                    </div>
                                </div>
                                <div className="gameu__ratingbar">
                                    {gameId.ratings?.map((rating) => {
                                        return (
                                            <div
                                                key={rating.id}
                                                className={`gameu__ratingbar-${rating.title}`}
                                                style={{width: `${rating.percent}%`}}
                                            >
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="gameu__ratingfull">
                                    {gameId.ratings?.map((rating) => {
                                        let ratingComponent;
                                        if (rating.title === "exceptional") {
                                            ratingComponent = (
                                                <>
                                                    <div className="gameu__ratinggreen"></div>
                                                    <div className="gameu__ratinggtext">{rating.title}</div>
                                                    <div className="gameu__ratingcount">{rating.count}</div>
                                                </>
                                            );
                                        } else if (rating.title === "recommended") {
                                            ratingComponent = (
                                                <>
                                                    <div className="gameu__ratingblue"></div>
                                                    <div className="gameu__ratinggtext">{rating.title}</div>
                                                    <div className="gameu__ratingcount">{rating.count}</div>
                                                </>
                                            );
                                        } else if (rating.title === "meh") {
                                            ratingComponent = (
                                                <>
                                                    <div className="gameu__ratingorange"></div>
                                                    <div className="gameu__ratinggtext">{rating.title}</div>
                                                    <div className="gameu__ratingcount">{rating.count}</div>
                                                </>

                                            );
                                        } else {
                                            ratingComponent = (
                                                <>
                                                    <div className="gameu__ratingred"></div>
                                                    <div className="gameu__ratinggtext">{rating.title}</div>
                                                    <div className="gameu__ratingcount">{rating.count}</div>
                                                </>
                                            );
                                        }
                                        return (
                                            <div className="gameu__ratingfull-container" key={rating.title}>
                                                {ratingComponent}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="gameu__about">
                                    <div className="gameu__about-description">
                                        <GameDescription description={gameId.description_raw}/>
                                    </div>
                                </div>
                            </div>
                            <div className="gameu__content-secondcol">
                                <VideoUrlReturn/>
                                <div className="gameu__photo">
                                    {screenshots.map((screenshot) => (
                                        <img key={screenshot.id} src={screenshot.image} alt="Screenshot"/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Gameunique;