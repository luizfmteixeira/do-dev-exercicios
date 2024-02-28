let numero = Number(prompt('escolha a tabuada'))
for (let j = numero; j <= numero + 2; j++) {
    console.log('tabuada do ' + j)
    for (let i = 0; i <= 10; i++) {
        console.log(j + ' x ' + i + ' = ' + i * j)
    }
}