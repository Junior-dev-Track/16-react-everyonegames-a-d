/* eslint-disable react/prop-types */
const GenresGames = ({genreInfo}) => {

    return (
        <>
            {genreInfo.map(element => (
                <span className="genreInfo moreTextInfo" key={element.id}>
                    <span>{element.name} </span>
                </span>
            ))}
        </>
    );
}

export default GenresGames;
