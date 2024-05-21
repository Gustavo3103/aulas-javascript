let frutas = ["Abacaxi", "Uva verde", "Banana", "Maçã"];

let novasFrutas = frutas.map((fruta) => {
    return fruta.toUpperCase()
})

console.log(novasFrutas);


let alunos = [
    {
        nome: "Gustavo",
        idade: 15,
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

let nomeAlunos = alunos.map((objeto) => {
    return objeto.curso
})

console.log(nomeAlunos);



//--------------------------


let notas = [1, 3, 5, 7, 9]

let aprovados = notas.filter((nota) => {
    return nota >= 7
})

console.log(aprovados);