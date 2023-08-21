const idades = [26, 18, 42]
// let total = 0
// for (let i = 0; i < idades.length; i++) {
//     total += idades[i]
// }
// media = total / idades.length;

// console.log(media);

// const total = idades.reduce((total, idade) => total += idade, 0);

// const media = total / idades.length;

// console.log(media);


const media = idades.reduce((total, idade) => total += idade) / idades.length;
console.log(media);

//O método reduce tem o único objetivo transformar o array em um único valor. Valor este que pode ser qualquer coisa (string, array, objeto, etc)

//retornar a soma de um array de números

const numbers = [0, 4, 1, 2, 5, 5]

const showNumbers = numbers.reduce((previousValue, currentValue) => {
    previousValue, currentValue
});

console.log(showNumbers);
// const somaNumeros = numeros.reduce((total, soma) => total + soma);


// let total = 0;
// for (let i = 0; i < numeros.length; i++) {
//     total += numeros[i]
// }

// console.log(total);
// console.log(somaNumeros);