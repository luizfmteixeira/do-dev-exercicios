let nome = 0
let idade = 0
let peso = 0
let altura = 0
let profissao = 0
let decisao = 1

while (decisao === 1) {

    nome = prompt('qual seu nome?')
    idade = prompt('qual sua idade?')
    peso = prompt('qual seu peso (kg)?')
    altura = prompt('qual sua altura (cm)?')
    profissao = prompt('qual sua profissao?')

    console.log('Olá ' + nome + ', você tem ' + idade + ' anos, é ' + profissao + ', tem ' + altura + 'M de altura e pesa ' + peso + 'kg.')

    if (idade >= 18) {
        console.log('Está liberado para tomar umas geladas')
    } else {
        console.log('Sem gelada para você')
    }

    dias = idade * 365
    meses = dias / 30
    semanas = dias / 7

    console.log('idade em meses: ' + parseInt(meses))
    console.log('idade em semanas: ' + parseInt(semanas))
    console.log('idade em dias: ' + parseInt(dias))

    peso = parseFloat(peso)
    altura = parseFloat(altura / 100)
    imc = peso / (altura * altura)

    if (imc < 18.5) {
        console.log('Magreza, quando o resultado é menor que 18,5 kg/m2');
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log('Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;');
    } else if (imc >= 24.9 && imc <= 30) {
        console.log('Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;');
    } else if (imc > 30) {
        console.log('Obesidade, quando o resultado é maior que 30 kg/m2.');
    }

    let anoDeNascimento = (2023 - idade)

    for (let i = 0; idade >= i; i++) {
        console.log(anoDeNascimento + ' - ' + i + ' anos de idade')
        anoDeNascimento++
    }

    decisao = Number(prompt('1- inserir novos dados 2- encerrar'))

}
