
const GenresGames = ({genreInfo}) => {

    return (
        <>
            <div className="genreInfo">
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
