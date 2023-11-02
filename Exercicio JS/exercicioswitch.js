let distance = prompt("Qual a distância em anos luz? ")

let chosenOption = prompt("Qual operação deseja realizr\n1- Parsec(pc)\n2- Unidade Astronômica(au)\n3- Quilometros(km)")

console.log(distance)

let convert;


switch (chosenOption) {
    case "1":
        chosenOption = "Parsec"
        convert = distance * 0.306601
        alert(`Anos luz: ${distance}\nOpção escolhida: ${chosenOption}\nresultado da conversão: ${convert}`)
        break

    case "2":
        chosenOption = "Unidade Astronômica"
        convert = distance * 63241.1
        alert(`Anos luz: ${distance}\nOpção escolhida: ${chosenOption}\nresultado da conversão: ${convert}`)
        break

    case "3":
        chosenOption = "Quilometros"
        convert = distance * 9.5 * Math.pow(10, 12)
        alert(`Anos luz: ${distance}\nOpção escolhida: ${chosenOption}\nresultado da conversão: ${convert}`)
        break

    default:
        alert("Opção inválida")

}