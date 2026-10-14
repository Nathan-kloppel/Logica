/* /* //array / lista de alunos

const alunos = [
    "dongle", // 0
    "william", // 1
    "nathan", // 2
    "xande", // 3
    "diogo" // 4
]
    // quantidade
console.log(alunos.length)


    // Acessar a posição 1
console.log(alunos[1])

    // Acessar ultima posição
console.log(alunos[alunos.length -1])

alunos[0] = "Diego" 
console.log (alunos[0]) */

/* const cores = [
    "Azul",
    "verde",
    "amarelo",
    "preto",
];

console.log(cores[0]);

console.log(cores[2]);

console.log(cores[cores.length -1]);

console.log(cores.length);

cores[1] = "roxo";

console.log(cores[1]);

console.log (cores);
 */



/* const animais = [
    "gato",
    "cachorro",
    "coelho"
    ]

//NÃO FUNCIONA PORQUE COMEÇA DO 0 ENTÃO O ARRAY POSSUI
// ATÉ 2 [0 , 1 , 2 ]
    console.log(animais[3]); */




//////////////////////////// MANIPULAÇÃO ARRAYS //////////////////////////////////
/* const livros = ["Harry potter", "Percy jackson", "game of thrones"]

//adiciono um novo elemento ao final do array
livros.push("senhor dos anéis")
console.log(livros)

//remove o último elemento do arrays
livros.pop();
console.log(livros)



// adiciono um novo elemento ao inicio do array
livros.unshift("Homem de ferro") 
console.log(livros)

//remove o primeiro elemento do arrays
livros.shift()
console.log(livros)

                    // Expressão lambda
const novoLivros = livros.filter(item => item !== "Harry potter");
console.log (novoLivros)

function removerItem(array, itemParaRemover) {
    return array.filter (item => item !== itemParaRemover)
}

const novoNovoLivros = removerItem (livros, "Percy jackson")
console.log(novoNovoLivros) */


/* const fila = ["Ana", "Bruno", "Carla"]
console.log(fila)

fila.push("Diego")
console.log(fila)

fila.shift()
console.log(fila)

fila.unshift("Elisa")
console.log(fila)

fila.pop()
console.log(fila)

console.log("pessoas na fila: ", fila.length) */


/* const alunos = [
    "dongle", // 0
    "william", // 1
    "nathan", // 2
    "xande", // 3
    "diogo" // 4
]

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i])
} */


/* const idades = [15, 18, 22, 16, 30];

let quantidade = 0;

for (let i = 0; i < idades.length; i++) {
    const idade = idades[i];

    if (idade >= 18) {
        quantidade++;
    }
}

console.log("maiores de idade", quantidade) */

/* const notas = [8, 5, 10, 6, 7];
let somaNotas = 0;
let notasMaioresOuIguaisSete = 0;
let maiorNota = 0;
let menorNota = 9999;

for(let i = 0; i < notas.length; i++) {
    const nota = notas[i];

    somaNotas = somar(somaNotas, nota)

    if(nota >= 7) {
        notasMaioresOuIguaisSete++;
    }

    if (nota >= maiorNota) {
        maiorNota = nota;
    }

    if (nota <= menorNota) {
        menorNota = nota;
    }

    console.log("aluno", i + 1, "-", "Nota: ", notas[i])
} */


/* const frutas = ["banana, tangerina", "uva"]


for (const fruta of frutas) {
    console.log(fruta)
} */


function mostraNomes(nomes) {
    for (const nome of nomes) {
        console.log(nome);
    }
}

const alunos = [
    "dongle", // 0
    "william", // 1
    "nathan", // 2
    "xande", // 3
    "diogo" // 4
]

mostraNomes(alunos);






