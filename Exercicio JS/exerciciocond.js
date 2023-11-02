let pilotname = prompt(" Qual seu nome pilot? ")
let velocity = 0
velocity = prompt(" Qual velocidade gostaria? ")
confirm(velocity + " Confirma a velocidade? ")

if (velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade.")
}
else if (velocity < 40) {
    alert("Você está devagar, podemos aumentar mais.")
}
else if (velocity >= 40 && velocity < 80) {
    alert("Parece uma boa velocidade para manter.")
}
else if (velocity >= 80 && velocity < 100) {
    alert("Velocidade alta, considere diminuir.")
}
else if (velocity >= 100) {
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert("Piloto: " + pilotname + " \nvelocidade: " + velocity + "km/s")