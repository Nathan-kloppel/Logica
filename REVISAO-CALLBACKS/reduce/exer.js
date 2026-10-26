const notas = (7, 8, 9);

const soma = notas.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
})

const media = soma / notas.length;


