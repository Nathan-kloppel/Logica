// Array OU lista
const numeros = [10, 20, 30];

const dobrado = numeros.map(
    // Função em forma de Arrow function
    (numero) => {
        return numero * 2;
    }
)
console.log(dobrado);