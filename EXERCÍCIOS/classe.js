class carro {
    constructor(fabricante, modelo, cor, ano) {
        this.fabricante = fabricante
        this.modelo = modelo
        this.cor = cor
        this.ano = ano
    }

    modeloCarro(){
        console.log(`O modelo do carro é: ${carrinho.modelo}`);
    }

    euAmoPacoca(){
        console.log("Eu amo muito paçoca. <3");
    }
}


let carrinho = new carro("Honda", "Civic", "Preto", 1993)

carrinho.modeloCarro()

carrinho.euAmoPacoca()