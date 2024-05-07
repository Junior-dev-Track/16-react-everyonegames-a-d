/* eslint-disable react/prop-types */
const GenresGames = ({genreInfo}) => {

    return (
        <>
            <div className="genreInfo gameHide moreTextInfo">
                {genreInfo.map(element => (
                    <span key={element.id}>
                        <span>{element.name} </span>
                    </span>
                ))}
            </div>
        </>
    );
}

export default GenresGames;
