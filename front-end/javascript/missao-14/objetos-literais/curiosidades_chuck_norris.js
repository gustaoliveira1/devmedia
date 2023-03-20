var curiosidades_chuck_norris = [
    { titulo: "Cuidados com a higiene bucal", conteudo: "Chuck Norris usa arame farpado como fio dental." },
    { titulo: "Fórmula para maratonar séries", conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos." },
    { titulo: "Suicida que não morre", conteudo: "Chuck Norris foi homem-bomba 34 vezes." },
    { titulo: "Olhos que tudo veem", conteudo: "Chuck Norris já viu o homem invisível." },
    { titulo: "Manipulando o tempo", conteudo: "Chuck Norris não usa relógio. Ele decide que horas são." },
    { titulo: "Praticando esportes radicais", conteudo: "Chuck Norris faz bungee jump sem corda." },
    { titulo: "Não vale chorar", conteudo: "Chuck Norris faz cebolas chorarem." },
    { titulo: "Tempero de fogo", conteudo: "Chuck Norris usa pólvora como tempero." },
    { titulo: "Extinção dos dinossauros", conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma." },
    { titulo: "Contando sem parar", conteudo: "Chuck Norris contou até o infinito. Duas vezes." }
]

function main() {
    curiosidade_escolhida = escolherCuriosidade(curiosidades_chuck_norris)
    var titulo_curiosidade = curiosidade_escolhida.titulo
    var conteudo_curiosidade = curiosidade_escolhida.conteudo
    imprimirCuriosidade(titulo_curiosidade, conteudo_curiosidade)
}

function escolherCuriosidade(colecao_curiosidades) {
    var total_curiosidades = colecao_curiosidades.length
    var numero_curiosidade = Math.floor(Math.random() * total_curiosidades)
    var curiosidade_escolhida = colecao_curiosidades[numero_curiosidade]
    return curiosidade_escolhida
}

function imprimirCuriosidade(titulo, conteudo) {
    console.log("CURIOSIDADE CHUCK NORRIS")
    console.log("Título: " + titulo)
    console.log("Conteúdo: " + conteudo)
}

main()