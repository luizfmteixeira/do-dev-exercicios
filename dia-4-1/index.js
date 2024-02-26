let fome = prompt('voce esta com fome? (sim/nao)')
if (fome === "sim") {
    fome = true
}
else {
    fome = false
}
let dinheiro = prompt('voce tem dinheiro? (sim/nao)')
if (dinheiro === "sim") {
    dinheiro = true
}
else {
    dinheiro = false
}
let restaurante = prompt('o restaurante esta aberto? (sim/nao)')
if (restaurante === "sim") {
    restaurante === true
}
else {
    restaurante = false
}

if (fome === false || dinheiro == false) {
    console.log('Hoje a janta sera em casa')
}
else if (fome === true && dinheiro === true) {
    if (restaurante === false) {
        console.log('peca um delivery')
    }
    else {
        console.log("Hoje o jantar sera no seu restaurante preferido")
    }
}

