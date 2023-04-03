import React from 'react';

const paginaInicial = () => {
    return (
        <div className='pagina-inicial'>
            <h1>Escolha seu caminho em JavaScript</h1>
            <div className='container-opcoes'>
                    <a className='opcao-front-end' href='/front-end'>Front-end</a>
                    <a className='opcao-back-end' href='/back-end'>Back-end</a>
            </div>
        </div>
    )
}

export default paginaInicial;