let num
let array= []
let numArray = 2
let num2Array = 0
let num3Array = 1

num = parseInt(prompt('digite um numero inteiro positivo'))

array[0] = num-1
array[1] = num

for(i=0; i<8; i++){
    array[numArray] = array[num2Array] + array [num3Array]

    numArray++
    num2Array++
    num3Array++
}

console.log(array)