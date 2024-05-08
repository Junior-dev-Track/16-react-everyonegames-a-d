/* eslint-disable react/prop-types */
const GenresGames = ({genreInfo}) => {
    return (
        <div>
            {genreInfo.map((element, index) => (
                <span className="genreInfo moreTextInfo" key={element.id}>
                    {element.name}{index < genreInfo.length - 1 ? ', ' : ''}
                </span>
            ))}
        </div>
    );
}

export default GenresGames;
