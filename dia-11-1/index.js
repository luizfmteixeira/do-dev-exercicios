let alunos = []
let notas = []
let nome = 0
let nota = 0
let condicao = 1
let alunosVar = 0
let notaVar = 0


while (condicao === 1) {
    nome = prompt('digite o nome do aluno ou N para parar')
    if (nome == 'N') {
        condicao = 0
    } else {
        alunos[alunosVar] = nome
        nota = parseFloat(prompt('digite sua nota'))
        notas[notaVar] = nota
        alunosVar++
        notaVar++
    }
}
x = alunosVar
alunosVar--
notaVar--

for (i = x; i > 0; i--) {
    console.log(alunos[alunosVar] + '=' + notas[notaVar])
    alunosVar--
    notaVar--
}