let alunos = [
    "Gustavo",
    "Maria Júlia",
    "Davi",
    "Fernanda",
    "Matheus"
]

alunos.forEach((aluno, numChamada, salaInteira) => {
    let salaInteiraComVirgula = salaInteira.join(", ")
    console.log(` Olá ${aluno}! Seu número na chamada é: ${numChamada} e os alunos que estão na sua sala são: ${salaInteiraComVirgula}.`);
    console.log("---- --- --- --- --- --- --- ----");
})