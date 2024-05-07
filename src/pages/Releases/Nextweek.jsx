import Header from "../Header/Header.jsx";
import Aside from "../../components/Aside.jsx";
import '../../styles/_Nextweek.scss';
import Footer from "../Footer/Footer.jsx";

function Nextweek() {
    return (
        <>
            <Header/>
            <div className="container">
                <div className="flexBox">
                    <Aside/>
                    <main>
                        <div className="noresult">
                            <img src="../../src/assets/icon/noresult/noresult.png" alt="Noresult" />
                            <div className="noresult-text">No game found</div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Nextweek;