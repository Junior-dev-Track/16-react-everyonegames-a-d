import {Link} from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <p>New Releases</p>
                <Link to="/">This Week</Link>
                <Link to="/">Next Week</Link>
                <Link to="/">Best of the year</Link>
            </nav>
        </header>
    );
}

export default Header;