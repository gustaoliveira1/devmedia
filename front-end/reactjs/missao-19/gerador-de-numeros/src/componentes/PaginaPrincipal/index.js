import { useState } from "react"

export const PaginaPrincipal = () => {
    const [numeroAleatorio, setNumeroAleatorio] = useState(0)

    const gerarNumeroAleatorio = () => {
        const numeroGerado = Math.floor(Math.random() * (100-1) + 1)
        setNumeroAleatorio(numeroGerado)
    }

    return (
        <div className="pagina-principal">
            <h2>Número aleatório: </h2>
            <h1>{ numeroAleatorio }</h1>
            <p>Clique no botão abaixo para gerar um número aleatório:</p>
            <button className="gerar-numero" onClick={ gerarNumeroAleatorio } >Gerar número</button>
        </div>
    )
}