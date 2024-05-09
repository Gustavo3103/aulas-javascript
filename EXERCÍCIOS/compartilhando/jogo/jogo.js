let num = prompt("jogo da adivinhação! Digite um número de 1 a 10")

if (num == 3) {
    alert("Parabéns, você acertou!!!")
} else if (num > 10 || num < 1) {
    alert("Tem que ser um número entre 1 e 10.")
} else {
    alert("Número errado! Regarregue a página e tente novamente.")
}