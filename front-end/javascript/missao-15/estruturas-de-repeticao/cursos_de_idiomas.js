let cursos_idiomas = [
    { nome: "Inglês", preco: 2500, carga_horaria: 160 },
    { nome: "Espanhol", preco: 1500, carga_horaria: 110 },
    { nome: "Francês", preco: 3600, carga_horaria: 200 },
    { nome: "Chinês", preco: 5500, carga_horaria: 400 },
    { nome: "Alemão", preco: 3800, carga_horaria: 230 }
]

function main() {
    for  (let curso of cursos_idiomas) {
    
        let nome_curso = curso.nome
        let preco_curso = curso.preco
        let carga_horaria_curso = curso.carga_horaria
        let preco_hora_curso = preco_curso / carga_horaria_curso
    
        imprimirCurso(nome_curso, preco_curso, carga_horaria_curso, preco_hora_curso)
    }
}

function imprimirCurso(nome, preco, carga_horaria, preco_hora) {
    console.log("Nome do curso: " + nome)
    console.log("Carga horária do curso: " + carga_horaria + " horas")
    console.log("Preço do curso: R$" + preco)
    
    if (preco_hora <15) {
        console.log("Hora/aula inferior a R$15,00")
    } else {
        console.log("Hora/aula superior ou igual a R$15,00")
    }

    console.log("\n")
}

main()