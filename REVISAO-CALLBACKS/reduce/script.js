const valores = [20, 35, 15];

let total = 0;

valores.forEach((valor) => {
    // total = total + valor
    total += valor;
})

console.log(total);


// Execução         Acumulador      item atual         retornar
// primeira             0               20                20
// segunda              20              35                55
//terceira              55              15                70

const totalv2 = valores.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
})