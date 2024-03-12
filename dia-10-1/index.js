let numero = 0
let array = []
let condicao = true
let contador = 0
let arrayFinal = []
let contadorFinal = 0

numero = Number(prompt('digite um numero inteiro'))
for (i = 0; i < 10; i++) {
    array[contador] = Number(prompt('elemento array'))
    if (array[contador] === numero) {
        arrayFinal[contadorFinal] = contador
        contadorFinal++
    }
    contador++
}

console.log(arrayFinal)

