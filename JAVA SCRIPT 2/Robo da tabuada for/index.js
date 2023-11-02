//inicialização; condição; finalização;
let numero = prompt("Digite um numero a ser multiplicado: ")
let result = ""

for (indice = 0; indice <= 20; indice++) {
    result += numero + " X " + indice + " = " + (numero * indice) + "\n"
}

alert(`
Multiplicação igual à:
${result}
`)