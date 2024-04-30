//Declaração das notas pelo prompt
let n1 = prompt("Digite sua primeira nota")
let n2 = prompt("Digite sua segunda nota")

//Verificar se alguma das duas notas são maiores que 10
if (n1 > 10 || n2 > 10) {
    alert("Não minta na sua nota, bobinho!")
} else {

    //Declaração do cálculo da média
    let media = (Number(n1) + Number(n2)) / 2


    //Mostrar a média ao usuário
    alert(`Sua média é ${media}`)


    //Alerta de aprovação ou de reprovação
    if (media >= 6) {
        alert("Parabéns, você passou!")
    } else {
        alert("Que pena, você foi reprovado!")
    }
}