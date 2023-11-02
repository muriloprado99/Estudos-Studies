let veiculo1 = prompt("digite o nome do veiculo1: ")
let veiculo2 = prompt("digite o nome do veiculo2: ")
let velocity3 = prompt("digite a velocidade no veiculo1: ")
let velocity4 = prompt("digite a velocidade no veiculo2: ")
let velocity1 = parseFloat(velocity3)
let velocity2 = parseFloat(velocity4)

if (velocity1 > velocity2) {
    alert("veiculo1 é mais rapido")
}
else if (velocity2 > velocity1) {
    alert("veiculo2 é mais rapido")
}
else {
    alert("velocidade de ambos é igual")
}
