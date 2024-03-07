let nome
let idade
let salario
let condicao = 2
let i = 0

while (condicao === 2) {
    nome = prompt('digite seu nome')
    idade = prompt('digite sua idade')
    salario = Number(prompt('digite seu salario'))

    condicao = Number(prompt('nome = ' + nome + '\n' + 'idade = ' + idade + '\n' + 'salario = ' + salario + '\n\n' + 'as informacoes estao corretas? 1- sim 2 - nao'))
}

let percentualAumento = 0.015
let salarioAumento = (salario + salario * percentualAumento)
let ano = 2025
console.log('2024 - ' + salarioAumento * 1)

for (let i = 0; i < 10; i++) {
    console.log(ano + ' - ' + (salarioAumento + (salarioAumento * (percentualAumento * 2))).toFixed(2))
    salarioAumento = (salarioAumento + (salarioAumento * (percentualAumento * 2)))
    percentualAumento = percentualAumento * 2
    i++
    ano++
}