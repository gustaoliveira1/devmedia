import input from 'readline-sync'

function main() {
    console.log("Aplicação de juros:\n\n")

    let valor_divida = Number(input.question("Informe o valor devido: R$"))
    if (valor_divida > 0) {

        let dias_atraso = Number(input.question("Informe quantos dias se passaram desde o vencimento do boleto: "))
        if (dias_atraso >= 10) {
            
            let taxa_juros = calcularTaxaJuros(dias_atraso)
            let valor_total_divida = calcularValorTotal(valor_divida, taxa_juros)
            imprimirResultado(valor_divida, dias_atraso, taxa_juros, valor_total_divida)
        }
        else {
            console.log("Você está em dia!")
        }
    }
    else {
        console.log("O valor da dívida deve ser maior do que zero!")
    }
}

function calcularTaxaJuros(atraso) {
    let taxa_juros = atraso > 15 ? 10 : 5
    return taxa_juros
}

function calcularValorTotal(valor, juros) {
    let total = valor + (valor / 100) * juros
    return total
}

function imprimirResultado(valor_original, dias_atrasados, taxa_juros, total_divida) {
    console.log(`\nValor original da dívida: R$${valor_original}`)
    console.log(`Dias atrasados: ${dias_atrasados}`)
    console.log(`Taxa de Juros: ${taxa_juros}%`)
    console.log(`Valor total com juros: R$${total_divida}`)
}

main()