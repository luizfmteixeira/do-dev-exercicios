let escolha = prompt('escolha uma opcao (gasolina 1 | alcool 2 | calibrar pneus 3)')
switch (escolha) {
    case '1':
        valorGas = (parseFloat(prompt('qual o valor desejado?')))
        console.log(valorGas / 5)
        break;
    case '2':
        valorAlc = (parseFloat(prompt('qual o valor desejado?')))
        console.log(valorAlc / 3)
        break;
    case '3':
        console.log('pneus calibrados com sucesso!')
        break;
    default:
        console.log('operação inválida')
}