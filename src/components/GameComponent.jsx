/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function GameComponent({ gameInfo, videoUrl, screenshots }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleVideoPlay = () => {
        // Logique de lecture de la vidéo
    };

    const handleCarouselPlay = () => {
        setIsHovered(true); // Activer le survol pour afficher le carousel
    };

    const handleCarouselLeave = () => {
        setIsHovered(false); // Désactiver le survol pour cacher le carousel
    };

    return (
        <div
            key={gameInfo.id}
            style={{position: 'relative'}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
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
                        loop
                        muted
                        src={videoUrl}
                        onMouseEnter={() => setIsHovered(true)} // Activer le survol pour afficher les icônes de contrôle de la vidéo
                        onMouseLeave={() => setIsHovered(false)} // Désactiver le survol pour cacher les icônes de contrôle de la vidéo
                    />
                </div>
            ) : (
                <div className={`carouselContainer ${isHovered ? '' : 'hidden'}`}>
                        <Carousel
                            onMouseEnter={handleCarouselPlay} // Activer le survol du carousel
                            onMouseLeave={handleCarouselLeave} // Désactiver le survol du carousel
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
                <div className="videoIcon" onClick={handleVideoPlay}>
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
