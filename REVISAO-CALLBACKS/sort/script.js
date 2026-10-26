const frutas = ["uva", "banana", "abacaxi", "manga"];

// Ele não leva em consideração ACENTOS e Caracteres especiais
frutas.sort();

// sort ordena em forma crescente
console.log(frutas);

const nomes = ["érica", "bruno", "Alvoro", "cáio"];

nomes.sort();

console.log(nomes);

nomes.sort((a, b) => {
    return a.localecompare(b, "pt-BR")
})

console.log (nomes);


//ordem crescente nos numeros
const precos = [80, 5, 120, 20];

// se quiser inverter é só fazer "return b - a;"
precos.sort((a, b) => {
    return a - b;
})

console.log(precos);


