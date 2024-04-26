import Aside from "../../components/Aside";
import Header from "../Header/Header";
import GenerateGameList from "../../components/GenerateGameList.jsx";

function Goty() {
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

export default Goty;