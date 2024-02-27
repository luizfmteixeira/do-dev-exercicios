let x = parseFloat(prompt('digite o primeiro numero da operacao'))
let operador = prompt('digite a operacao desejada (+ , - , / , *')
let y = parseFloat(prompt('digite o segundo numero da operacao'))

switch (operador) {
    case "+":
        console.log(x + y)
        break;
    case "-":
        console.log(x - y)
        break;
    case "*":
        console.log(x * y)
        break;
    case "/":
        console.log(x / y)
        break;
    default :
        console.log('operacao invalida')
}
