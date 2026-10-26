const produtos = [
    {
        nome: "Mouse",
        valor: 707
    },
    {
        nome: "teclado",
        valor: 375
    },
    {
        nome: "Headset",
        valor: 222
    }
]

produtos.sort((a, b) => {
    return a.valor - b.valor;
})



produtos.forEach((produto) => {
    console.log(produto.nome)
})