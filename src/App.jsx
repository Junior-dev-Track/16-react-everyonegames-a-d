import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './Main.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <React.StrictMode>
        <Main />
      </React.StrictMode>,
    </BrowserRouter>
)
