import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PaginaInicial from "../PaginaInicial";
import PaginaFrontEnd from "../PaginaFrontEnd";
import PaginaBackEnd from "../PaginaBackEnd";

const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<PaginaInicial />} />
                <Route path="/front-end" element={<PaginaFrontEnd/>} />
                <Route path="/back-end" element={<PaginaBackEnd/>} />
            </Routes>
        </Router>
    )
}

export default Rotas;