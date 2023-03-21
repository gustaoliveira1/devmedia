import input from 'readline-sync'

console.log("Área do triângulo:\n\n")

let base = input.question("Digite o comprimento da base do triangulo: ")
let altura = input.question("Digite a altura do triangulo: ")

let area_triangulo = base * altura / 2

console.log(`A área do triângulo é: ${area_triangulo}`)