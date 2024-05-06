import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Main from './Main.jsx'
import Gameid from "./pages/Gameid/Gameunique";
import Thisweek from "./pages/Releases/Thisweek";
import Nextweek from "./pages/Releases/Nextweek";
import Goty from "./pages/Releases/Goty";
import "../style.scss"

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="game/:id" element={<Gameid/>}/>
                <Route path="thisweek" element={<Thisweek/>}/>
                <Route path="nextweek" element={<Nextweek/>}/>
                <Route path="goty" element={<Goty/>}/>
            </Routes>
        </React.StrictMode>
    </BrowserRouter>
)
