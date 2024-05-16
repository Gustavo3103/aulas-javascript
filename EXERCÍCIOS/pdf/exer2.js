let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let par = [2, 4, 6, 8, 10]
//---- --- --- --- ----

let idade;

do {
    idade = parseInt(prompt("Olá! Por favor, digite aqui a sua idade."))
} while (isNaN(idade) || idade <= 0);

//Faca a primeira ação
//Idade não for um número, faça de novo.
//ou
//Idade for menor ou igual à zero.