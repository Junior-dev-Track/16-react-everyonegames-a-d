import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Main from './Main.jsx'
import './index.css'
import Gameid from "./pages/Gameid/Gameunique.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="game/:id" element={<Gameid/>}/>
            </Routes>
        </React.StrictMode>
    </BrowserRouter>
)
