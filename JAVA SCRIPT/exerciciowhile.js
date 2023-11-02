let nave = prompt("Qual tua nave? ")
let dobra = prompt("Deseja entrar na dobra espacial?\n 1 - sim\n 2 - não ")
let qtd = 0

while (dobra == "1") {
    qtd += 1
    dobra = prompt("Deseja realizar a próxima dobra?\n 1 - sim\n 2 - não ")
}
alert(`O nome da nave é: ${nave} 
Quantidade de dobras: ${qtd}`)
