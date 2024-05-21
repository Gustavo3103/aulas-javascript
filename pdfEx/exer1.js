//EXERCÍCIO 1
let numbers = [1, 2, 3, 4, 5]

let novosNumbers = numbers.map((numeros) => {
    return numeros * 2
})

console.log(novosNumbers);


console.log("----- ---- ---- ---- -----");



//EXERCÍCIO 2
let numeros = [1, 2, 3, 4, 5]

let numerosPares = numeros.filter((pares) => {
    return pares % 2 == 0
})

console.log(numerosPares);


console.log("----- ---- ---- ---- -----");




//EXERCÍCIO 3
let frutas = ['Maçã', 'Banana', 'Laranja', 'Kiwi']

let frutinhas = frutas.forEach((mostrandoFrutas,) => {
    console.log(`As frutas são: ${mostrandoFrutas}`);
})


console.log("----- ---- ---- ---- -----");




//EXERCÍCIO 4
let students = [
    { name: 'João', age: 12 },
    { name: 'Janayna', age: 27 },
    { name: 'Marcão', age: 53 }
];

students.forEach((nome) => {
console.log(`O nome dos estudantes são: ${nome.name} e a idade de cada um é: ${nome.age}`);
})

console.log("----- ---- ---- ---- -----");




//EXERCÍCIO 5
let alunos = [
    {
        nome: "Gustavo",
        idade: 108,
        curso: "Mecânica"
    },

    {
        nome: "Davi",
        idade: 79,
        curso: "ADM"
    },

    {
        nome: "Fernanda",
        idade: 12,
        curso: "Aviação"
    }
]

let estudantesMap = alunos.map((obj) => {
    return obj.nome
})

console.log(estudantesMap);