/* eslint-disable react/prop-types */
const GenresGames = ({genreInfo}) => {

    return (
        <>
            <div className="genreInfo gameHide">
                {genreInfo.map(element => (
                    <div key={element.id}>
                        <p>{element.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default GenresGames;
