import Header from "./pages/Header/Header.jsx";

import GenerateGameList from "./components/GenerateGameList.jsx";
import Aside from "./components/Aside.jsx";
import Footer from "./pages/Footer/Footer.jsx";

function Main() {

    return (
        <>
            <Header />
            <div className="container">
                <div className="flexBox">
                    <Aside />
                    <main>
                        <div className="chooseCat">
                            <select>
                                <option value="Dateadded">Date added</option>
                                <option value="Name">Name</option>
                                <option value="Releasedate">Release date</option>
                            </select>
                            <select>
                                <option value=""></option>
                            </select>
                        </div>
                        <GenerateGameList />
                    </main>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Main