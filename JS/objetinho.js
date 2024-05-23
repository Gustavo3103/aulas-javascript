class celularModel {
    constructor(marca, modelo, cor, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }

    desbloquearCelular() {
        console.log(`O celular foi desbloqueado.`);
    }
}

let celular2 = new celularModel("Note 12", "Xiaomi", "Azul escuro", 2023)

let celular3 = new celularModel("Pocket", "Samsung", "Amarelo", 2014)

celular2.desbloquearCelular()
