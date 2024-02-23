let nome = prompt('digite seu nome')
let idade = prompt('digite sua idade')
let altura = Number(prompt('digite sua altura em cm'))
let peso = Number(prompt('digite seu peso em kg'))
let alturaEmMetros = altura/100
let anoDeNascimento = (2023-idade)
let imc = (peso/ (alturaEmMetros*alturaEmMetros))

console.log("Olá "+ nome + ", voce tem " + idade + " anos, nasceu em " + anoDeNascimento + ", tem " + alturaEmMetros + " de altura, pesa " + peso + "kg seu IMC é " + imc + " Kg/m2")