let money1 = prompt("Quantos dinheiros ta teno? ")
let option
let money = parseFloat(money1)



do {
    option = prompt(`
    - Adicionar
    - Remover 
    - Sair
    `)

    switch (option) {
        case "Adicionar":
            let adicionar1 = prompt("Digite valor a ser adicionado: ")
            let adicionar = parseFloat(adicionar1)
            money = money + adicionar
            break

        case "Remover":
            let remover1 = prompt("Digite valor a ser removido: ")
            let remover = parseFloat(remover1)
            money = money - remover
            break

    }

    alert(`Opção selecionada: ${option}
    100% atualizado: ${money}`)

} while (option != "Sair")