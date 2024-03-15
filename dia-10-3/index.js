let array = []
let array2 = []
let contador = 0
let quantidade = 0
let num = 1
let quantidade2 = 0

quantidade = prompt('quantos numeros vc deseja digitar?')

for (i = 0; i < quantidade; i++) {
    array[contador] = Number(prompt('digite o ' + num + '° numero'))
    contador++
    num++
}
contador = 0
quantidade2 = 3

for (j = 0; j < quantidade2; j++) {
    array2[contador] = array[quantidade]
    contador++
    quantidade--
}


console.log(array)
console.log(array2)