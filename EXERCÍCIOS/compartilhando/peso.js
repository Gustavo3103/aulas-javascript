
let altura = (prompt("Digite sua altura em metros:"))
let peso = (prompt("Digite seu peso em quilogramas:"))

let imc = peso / (altura * altura);

if (imc >= 18.5 && imc < 25) {
    alert(`Seu IMC é ${imc} e isso está saudável!`)
} else {
    alert(`Seu IMC é ${imc} e isso não é saudável.`)
}
