const nomeProduto = "carderno";
const valorProduto = 25;

const Produto = {
    // Key : value
    nome: "caderno",
    valor: 25
}
// Estou acesando uma propriedade do meu objeto (que nesse caso é a String)
console.log(nomeProduto.length);

console.log(Produto.nome);
console.log(Produto.valor);

Produto.valor = 33;

console.log(Produto.valor);

const produto = [
    {
        nome: "caderno",
        valor: 25,
        peso: 100.25
    },
    {
        nome: "mochila",
        valor: 120,
        peso: 20.25
    },
    {
        nome: "caneta",
        valor: 5,
        peso: 1.12
    }
]


// assim pega o nome do primeiro produto

console.log(produto[0].nome)
