let nome
let idade
let carteira
let carro

nome = prompt('qual seu nome?')
idade = prompt('qual sua idade?')
carteira = prompt('possui habilitacao? (sim/nao)')
if (carteira === 'sim') {
    carteira = true
} else {
    carteira = false
}
carro = prompt('possui carro? (sim/nao)')
if (carro === 'sim') {
    carro = true
} else {
    carro = false
}

if(idade < 18 || carteira === false){
console.log(nome + ", voce nao pode dirigir!")
} else if (idade >=18 && carteira === true){
    if (carro === false){
        console.log(nome + ', voce pode dirigir mas nao tem um carro')
    } else{ 
        console.log (nome + ", voce será o motorista!")
    }
}