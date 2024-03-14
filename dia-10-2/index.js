let array = []
let array2 = []
let contador = 0
let contadorInvert = 4

for (i = 0; i < 5; i++) {
    array[contador] = Number(prompt('digite um numero'))
    contador++
}
contador = 0

for (j = 0; j < 5; j++) {
    array2[contador] = array[contadorInvert]
    contador++
    contadorInvert--
}


console.log(array2)