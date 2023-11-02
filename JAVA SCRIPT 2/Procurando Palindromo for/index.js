let palavra = prompt("Digite uma palavra: ")
let result = ""

for (indice = palavra.length - 1; indice >= 0; indice--) {
    result = result + palavra[indice]
}

if (palavra == result) {

    alert(`Não é um Palindromo`)

} else {

    alert(`
        Não é um Palindromo.
        Da esquerda pra direita: ${palavra}
        Da direita pra esquerda: ${result}
        `)

}

