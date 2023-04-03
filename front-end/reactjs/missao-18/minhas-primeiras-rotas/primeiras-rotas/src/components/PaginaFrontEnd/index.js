import React from "react";
import BotaoVoltar from "../BotaoVoltar";

const PaginaFrontEnd = () => {
    return (
        <div className="pagina-front-end limitador-largura">
            <h1>React.js</h1>
            <p>O React é uma biblioteca JavaScript para construir interfaces de usuário dinâmicas e interativas. Ele usa um modelo de programação declarativa e é altamente flexível. O React pode ser integrado com outras tecnologias front-end e oferece suporte à renderização do lado do servidor. Em resumo, o React permite criar interfaces de usuário de alta qualidade e interativas de forma rápida e fácil.</p>
            <BotaoVoltar/>
        </div>
    )
}

export default PaginaFrontEnd;