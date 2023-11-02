let departureDateEntry = prompt("Digite a data de partida (Format DD/MM/YYYY")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - departureDate

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- segundos\n2- minutos\n3- horas\n4- dias")

if (chosenOption == "1") {
    let secondOfDeparture = Math.round(dateDiff / 1000)
    alert("tempo de voo: " + secondOfDeparture + "segundos")
}
else if (chosenOption == "2") {
    let minuteOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert("tempo de voo: " + minuteOfDeparture + "minutos")
}
else if (chosenOption == "3") {
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("tempo de voo " + hoursOfDeparture + "hours")
}
else if (chosenOption == "4") {
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("tempo de voo " + daysOfDeparture + "days")
}
else {
    alert("opção inválida")
}