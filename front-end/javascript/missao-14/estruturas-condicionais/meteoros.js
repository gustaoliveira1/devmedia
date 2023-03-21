let meteoros_trimestre_um     =  "Alfa Centaurideos começa em 03/01 e termina em 05/01\nGama Normídeos começa em 17/02 e termina em 20/02\nPi Pupídeos começa em 25/03 e termina em 29/03";

let meteoros_trimestre_dois   =  "Líridas começa em 23/05 e termina em 26/05\nEta Aquáridas começa em 31/05 e termina em 02/06\nBootídeos de Junho começa em 16/06 e termina em 20/06";

let meteoros_trimestre_tres   =  "Eta Líridas começa em 19/08 e termina em 22/08\nAlfa Capricornídeos começa em 13/09 e termina em 17/09";

let meteoros_trimestre_quatro =  "Delta Aquáridas do Sul começa em 11/10 e termina em 15/10\nPiscis Austrinídeos começa em 04/12 e termina em 08/12\nPerseidas começa em 27/12 e termina em 31/12"

function main() {
    mes_atual = pegarMesAtual()
    const [ trimestre, chuva_meteoros ] = processarTrimestre(mes_atual)
    imprimirChuva(trimestre, chuva_meteoros)
}

function pegarMesAtual() {
    let data_atual = new Date()
    let mes_atual = data_atual.getMonth()
    return mes_atual
}

function processarTrimestre(mes_atual) {
    let trimestre = ""
    let chuva_meteoros = ""
    if (mes_atual == 0 || mes_atual == 1 || mes_atual == 2) {
        trimestre = "primeiro", chuva_meteoros = meteoros_trimestre_um
    } 
    else if (mes_atual == 3 || mes_atual == 4 || mes_atual == 5) {
        trimestre = "segundo", chuva_meteoros = meteoros_trimestre_dois
    }
    else if (mes_atual == 6 || mes_atual == 7 || mes_atual == 8) {
        trimestre = "terceiro", chuva_meteoros = meteoros_trimestre_tres
    }
    else if (mes_atual == 9 || mes_atual == 10 || mes_atual == 11) {
        trimestre = "quarto", chuva_meteoros = meteoros_trimestre_quatro
    }
    return [ trimestre, chuva_meteoros ]
}

function imprimirChuva(trimestre, chuva_meteoros) {
    console.log(`As chuvas de meteoros do ${trimestre} trimestre são:\n\n` + chuva_meteoros)
}

main()