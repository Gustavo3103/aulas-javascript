let meuNome = document.createElement("H1");

meuNome.innerHTML = "Gustavo Soares de Souza"

document.body.appendChild(meuNome)

meuNome.style.borderTop = "solid 3px #000"

meuNome.style.color = "Purple"



let espacoVazio = document.createElement("H2");

espacoVazio.innerHTML = " "

document.body.appendChild(espacoVazio)


let pedir = window.prompt("Digite seu nome")

espacoVazio.innerHTML = pedir