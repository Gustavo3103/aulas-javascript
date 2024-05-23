class Celular {
    constructor(modelo, marca, memoria) {
        this.modelo = modelo;
        this.marca = marca;
        this.memoria = memoria
    }
}

class CelularGamer extends Celular {
    constructor(modelo, marca, memoria, tela, rgb) {
        super(modelo, marca, memoria);
        this.tela = tela;
        this.rgb = rgb
    }
}

class CelularGamerPro extends CelularGamer {
    constructor(modelo, marca, memoria, tela, rgb, cooler) {
        super(modelo, marca, memoria, tela, rgb);
        this.cooler = cooler;
    }
}

let celular0 = new Celular("Note 3", "Samsung", "4GB")

let celular1 = new CelularGamer("Note 12", "Xiaomi", "8GB", "120hz", true)

let celular2 = new CelularGamerPro("Nubia Pro Blaster Master Ultra Paçoca", "Xiaomi", "16GB", "340hz", true, true)

console.log(celular0);
console.log(celular1);
console.log(celular2);