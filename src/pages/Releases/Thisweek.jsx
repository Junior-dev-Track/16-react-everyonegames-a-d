import Header from "../Header/Header.jsx";
import Aside from "../../components/Aside.jsx";
import GenerateGameList from "../../components/GenerateGameList.jsx";

function Thisweek() {
    return (
        <>
            <Header/>
            <div className="container">
                <div className="flexBox">
                    <Aside/>
                    <main>
                        <GenerateGameList />
                    </main>
                </div>
            </div>
        </>
    );
}

export default Thisweek;