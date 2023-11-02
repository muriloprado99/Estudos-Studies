const valor = prompt("Digite o valor em metros: ")
let escolha = prompt(`Escolha uma das opções: 
1 - milimetro
2 - centimetro
3 - decimetro
4 - decametro
5 - hectometro
6 - quilometro`)

let resultado

switch (escolha) {
    case "1":
        resultado = valor * 1000
        break
    case "2":
        resultado = valor * 100
        break
    case "3":
        resultado = valor * 10
        break
    case "4":
        resultado = valor * 0.1
        break
    case "5":
        resultado = valor * 0.01
        break
    case "6":
        resultado = valor * 0.001
        break
    default:
        alert("valor invalido")
        break
}

alert(`
O resultado da escolha ${escolha} é igual a ${resultado}
`)