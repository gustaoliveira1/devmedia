import React from "react";
import { Link } from 'react-router-dom'
import "./style.css"

const BotaoVoltar = () => {
    return (
        <div className="botao-voltar">
            <Link className="botao" to="/">Voltar</Link>
        </div>
    )
}

export default BotaoVoltar;