import { useState,useEffect } from "react";
import { getApiSearch } from "../../api/Api.jsx";
import '../../styles/_Header.scss';
import { Link } from "react-router-dom";

function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const results = await getApiSearch(searchTerm);
            setSearchResults(results);
        } catch (error) {
            console.error('Erreur lors de la récupération des résultats de recherche:', error);
        }
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    useEffect(() => {
        if (searchTerm !== '') {
            handleSearch();
        } else {
            setSearchResults([]);
        }
    }, [searchTerm]);

    return (
        <header>
            <nav className="searchInput-nav">
                <input
                    className="searchInput"
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Recherche ..."
                />
                <ul className="searchResults">
                    {searchResults.map((result) => (
                        <li key={result.id}>
                            {/* Utilisation de Link pour créer le lien */}
                            <Link to={`/game/${result.id}`}>
                                {result.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;