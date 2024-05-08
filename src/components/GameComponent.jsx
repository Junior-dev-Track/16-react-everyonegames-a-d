/* eslint-disable react/prop-types */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function GameComponent({ gameInfo, videoUrl, screenshots, isHovered }) {


    return (
        <div
            key={gameInfo.id}
            style={{position: 'relative'}}
        >
            <img
                className={`imageGame ${isHovered ? 'hidden' : ''}`}
                src={gameInfo.background_image}
                alt={gameInfo.name}
            />
            {/* Affichage de la vidéo si disponible */}
            {videoUrl && videoUrl.length > 0 ? (
                <div className={`videoContainer ${isHovered ? '' : 'hidden'}`}>
                    <video
                        className="videoGame"
                        autoPlay
                        loop
                        muted
                        src={videoUrl}
                    />
                </div>
            ) : (
                <div className={`carouselContainer ${isHovered ? '' : 'hidden'}`}>
                        <Carousel
                            stopOnHover={false}
                            autoPlay={isHovered}
                            showThumbs={false}
                            dynamicHeight
                            showArrows={false}
                            showStatus={false}
                            infiniteLoop
                        >
                            {screenshots.map((screenshot, index) => (
                                <img
                                    key={index}
                                    className="carouselImage"
                                    src={screenshot.image}
                                    alt={gameInfo.name}
                                />
                            ))}
                        </Carousel>
                    </div>
            )}

            {/* Affichage de l'icône vidéo si une vidéo est disponible et le survol est désactiver */}
            {videoUrl && videoUrl.length > 0 && !isHovered && (
                <div className="videoIcon">
                    <img src="../../src/assets/player.svg" alt="Video disponible"/>
                </div>
            )}

            {/* Affichage de l'icône carousel si aucune vidéo n'est disponible et le survol est désactiver */}
            {!(videoUrl && videoUrl.length > 0) && screenshots && screenshots.length > 0 && !isHovered && (
                <div className="carouselIcon">
                    <img src="../../src/assets/carousel.svg" alt="Carousel disponible"/>
                </div>
            )}
        </div>
    );
}

export default GameComponent;
