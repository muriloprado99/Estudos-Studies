let velocity = 110

if (velocity < 100) {
    console.log("Estamos em uma velocidade aceitável")
} else {
    console.log("Entrando em velocidade de risco")
}

if (velocity < 40) {
    console.log("Velocidade baixa")
} else if (velocity <= 100) {
    console.log("Cuidado! Proximo a velocidade de risco")
} else {
    console.log("Velocidade de risco!")
}

velocity > 100 ? console.log("Velocidade maior que 100") : console.log("Velocidade menor que 100")