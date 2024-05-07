/* eslint-disable react/prop-types */
import { useState } from 'react';

function GameComponent({ gameInfo, videoUrl }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            key={gameInfo.id}
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img className="imageGame" src={gameInfo.background_image} alt={gameInfo.name}/>
            {videoUrl && videoUrl.length > 0 && (
                <div className="styleVideo" style={{ display: isHovered ? 'block' : 'none' }}>
                    <video
                        className="videoGame"
                        muted
                        autoPlay
                        loop
                        src={videoUrl}
                    />
                </div>
            )}
            {!isHovered && (
                <div className="videoIcon" style={{ display: videoUrl && videoUrl.length > 0 ? 'block' : 'none', position: 'relative' }}>
                    {/* Icône pour indiquer la présence d'une vidéo */}
                    <img src="../../src/assets/player.svg" alt="Video disponible"/>
                </div>
            )}
        </div>
    );
}

export default GameComponent;