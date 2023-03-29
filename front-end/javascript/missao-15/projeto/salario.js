import input from 'readline-sync'

const salarioMinimo = [
    { ano: 2010, salario: 510.00},
    { ano: 2011, salario: 545.00},
    { ano: 2012, salario: 622.00},
    { ano: 2013, salario: 678.00},
    { ano: 2014, salario: 724.00},
    { ano: 2015, salario: 788.00},
    { ano: 2016, salario: 880.00},
    { ano: 2017, salario: 937.00},
    { ano: 2018, salario: 954.00},
    { ano: 2019, salario: 998.00},
    { ano: 2020, salario: 1045.00}
]

const inflacao = [
    { ano: 2010, ipca: 5.91 },
    { ano: 2011, ipca: 6.50 },
    { ano: 2012, ipca: 5.84 },
    { ano: 2013, ipca: 5.91 },
    { ano: 2014, ipca: 6.41 },
    { ano: 2015, ipca: 10.67 },
    { ano: 2016, ipca: 6.29 },
    { ano: 2017, ipca: 2.95 },
    { ano: 2018, ipca: 3.75 },
    { ano: 2019, ipca: 4.31 },
    { ano: 2020, ipca: 4.52 }
]

function main() {
    let opcaoEscolhida = menuEscolhas()
    decidirAcao(opcaoEscolhida)
}

const menuEscolhas = () => {
    console.log(`Escolha uma das alternativas: 

1 - Listar salários mínimos de 2010 a 2020
2 - Listar o índice IPCA de 2010 a 2020
3 - Comparação entre o percentual de aumento salarial e o IPCA`)

    const opcaoEscolhida = input.question("\nDigite o numero da sua escolha: ")
    return Number(opcaoEscolhida)
}

const decidirAcao = (opcaoEscolhida) => {
    switch(opcaoEscolhida) {
        case 1:
            listarSalariosMinimos()
            break
        case 2:
            listarInflacoes()
            break
        case 3:
            compararSalarioInflacao()
            break
        default: 
            console.log("Opção inválida!")
            break
    }
}

const listarSalariosMinimos = () => {
    for (const dado of salarioMinimo) {
        const ano = dado.ano
        const salario = dado.salario.toFixed(2).replace(".", ",")
        console.log(`\nAno: ..................... ${ano}`)
        console.log(`Salário mínimo: .......... R$${salario}`)
    }
}

const listarInflacoes = () => {
    for (const dado of inflacao) {
        const ano = dado.ano
        const inflacaoIPCA = dado.ipca.toFixed(2).replace(".", ",")
        console.log(`\nAno: ..................... ${ano}`)
        console.log(`Inflação IPCA: ........... ${inflacaoIPCA}%`)
    }
}

const compararSalarioInflacao = () => {
    for (let i = 0; i <= inflacao.length -1; i++) {
        const ano = salarioMinimo[i].ano
        const salario = salarioMinimo[i].salario
        let percentualCrescimentoFormatado

        if (i > 0) {
            const salarioAnterior = salarioMinimo[i-1].salario
            const direferenca = salario - salarioAnterior
            const percentualCrescimento = (direferenca / salarioAnterior) * 100 
            percentualCrescimentoFormatado = percentualCrescimento.toFixed(2).replace(".", ",")
        } else {
            percentualCrescimentoFormatado = "-"
        }

        const salarioFormatado = salario.toFixed(2).replace(".", ",")
        const inflacaoIPCA = inflacao[i].ipca.toFixed(2).replace(".", ",")

        console.log(`\nAno: ..................... ${ano}`)
        console.log(`Salário mínimo: .......... R$${salarioFormatado}`)
        console.log(`Crescimento salarial: .... ${percentualCrescimentoFormatado}%`)
        console.log(`Inflação IPCA: ........... ${inflacaoIPCA}%`)
    }
}

main()