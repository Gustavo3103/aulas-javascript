let veiculo1 = {
    marca: "Honda",
    modelo: "Civic",
    cor: "Preto",
    identificacao: {
        carro: true,
        moto: false,
        helicoptero: false
    }
}

let veiculo2 = {
    marca: "Kawasaki",
    modelo: "Ninja 400",
    cor: "Verde",
    identificacao: {
        carro: false,
        moto: true,
        helicoptero: false
    }
}

let veiculo3 = {
    marca: "Bell Helicopter",
    modelo: "AH-1 Cobra",
    cor: "Cinza",
    identificacao: {
        carro: false,
        moto: false,
        helicoptero: true
    }
}

console.log(veiculo1.identificacao.helicoptero);
console.log(veiculo2.modelo);
console.log(veiculo3.modelo);

