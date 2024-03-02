let condicao = 1
let nota = 0
let somaMedia = 0
let masc = 0
let fem = 0
let maiorNota = 0
let numeroAlunos= 0
while (condicao == 1) {
    nota = Number(prompt('digite sua nota'))
    sexo = (prompt('sexo: m-masculino f-femino'))
    somaMedia += nota
    numeroAlunos ++
    
    if (sexo === 'm') {
        masc++
        if(nota>maiorNota){
            maiorNota+=nota
        }
    } else if(sexo === 'f' && nota > 7 ) {
        fem++
    }
    condicao = Number(prompt('voce quer cadastrar outra nota? 1-sim 2-nao'))
}
console.log('A média geral dos alunos é: ' + (somaMedia/numeroAlunos))
console.log(masc + ' homens enviaram notas')
console.log(fem + ' mulheres enviaram notas acima de 7')
console.log('a maior nota registrada entre homens foi: ' + maiorNota)