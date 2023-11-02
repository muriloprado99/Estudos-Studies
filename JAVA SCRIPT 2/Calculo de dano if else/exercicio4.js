let name1 = prompt("Digite o nome do personagem: ")
let poweratack1 = prompt("Digite o poder de ataque do personagem: ")
let name2 = prompt("Digite o nome do segundo personagem: ")
let pointlife = prompt("Digite a vida do personagem: ")
let powerdefense2 = prompt("Digite o poder de defesa do personagem: ")
let shield = prompt("O personagem possui escudo? \n 1- para sim \n 2- para não")
let dmg
let poweratack = parseFloat(poweratack1)
let powerdefense = parseFloat(powerdefense2)

if (poweratack > powerdefense && shield == "2") {
    dmg = poweratack - powerdefense
}
else if (poweratack > powerdefense && shield == "1") {
    dmg = poweratack - powerdefense
    dmg = dmg / 2
}
else {
    dmg = 0
}

pointlife -= dmg

alert(`
Primeiro personagem: ${name1}
Poder de ataque do personagem: ${poweratack}
Segundo personagem: ${name2}
Pontos de vida do personagem: ${pointlife}
Pontos de defesa: ${powerdefense}
Dano igual a: ${dmg}
`)