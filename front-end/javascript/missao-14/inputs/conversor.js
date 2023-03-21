import input from 'readline-sync'

console.log("Conversor de milhas para Quilômetros:\n\n")

let milhas = input.question("Infome o valor em milhas: ")

let km = milhas / 0.62137

console.log(`${milhas}mi equivale a ${km}km`)