let altura = prompt("Qual a sua altura em metros)? ")
let peso = prompt("Quanto você pesa (em quilos)? ")

let imc = parseFloat(peso / (altura * 2))

if (imc >= 18.5 && imc < 25) {
    alert(`Seu IMC é ${imc.toFixed(2)}, parabéns, você está saudável!`)
} else {
    alert(`Seu IMC é ${imc.toFixed(2)}, Você não está saudável!!!`)
}