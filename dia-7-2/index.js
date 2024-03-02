let saldo = 100
let maiorValor = 0
let valorMedia = 0
let condicao = 1
let contValores = 0

prompt('digite seu nome')
prompt('digite seu cpf')
while (condicao === 1) {
    valor = Number(prompt('digite o valor desejado: '))
    if (valor > maiorValor) {
        maiorValor = valor
    }
    valorMedia += valor
    contValores++
    saqueDeposito = Number(prompt('escolha a funcao 1- saque 2- deposito'))
    if (saqueDeposito === 1) {
        if (valor > saldo) {
            console.log('voce não possui este saldo disponivel')
        } else {
            saldo -= valor
        }
    } else if (saqueDeposito === 2) {
        if (valor < 0) {
            console.log('voce nao pode sacar um valor negativo')
        } else {
            saldo += valor
        }
    }
    condicao = Number(prompt('voce deseja continuar 1-sim 2-nao'))

}
console.log('saldo total = ' + saldo)
console.log('maior valor inserido = ' + maiorValor)
console.log('media dos valores inseridos = ' + (valorMedia / contValores))