let nameTurista = prompt("Digite seu nome: ")
let turista = prompt("Já visitou alguma cidade? (sim/não)")
let cityName = " "
let qtd = 0
while (turista === "sim") {

    let city = prompt("Qual o nome da cidade? ")
    qtd += 1
    turista = prompt("Visitou outra cidade? (sim/não)")
    cityName = cityName + city + ", "
}

alert(`Nome do turista: ${nameTurista}
Quais cidades já visitou: ${cityName}
Quantidade de cidades visitadas: ${qtd}`)