import React from "react";
import BotaoVoltar from "../BotaoVoltar";

function PaginaBackEnd() {
    return (
        <div className="pagina-back-end limitador-largura">
            <h1>Node.js</h1>
            <p>O Node.js é uma plataforma de desenvolvimento de software em JavaScript construída sobre o motor de JavaScript V8 do Google Chrome. Ele permite que os desenvolvedores criem aplicativos escaláveis do lado do servidor usando JavaScript em vez de outras linguagens de servidor, como PHP ou Python. O Node.js é executado em uma única thread e usa um modelo de E/S não bloqueante, o que significa que pode lidar com muitas conexões simultâneas com baixa latência. O Node.js é frequentemente usado em conjunto com frameworks de servidor, como o Express, para criar aplicativos da web robustos e escaláveis. Em resumo, o Node.js é uma plataforma poderosa para construir aplicativos escaláveis do lado do servidor com JavaScript.</p>
            <BotaoVoltar/>
        </div>
    )
}

export default PaginaBackEnd;