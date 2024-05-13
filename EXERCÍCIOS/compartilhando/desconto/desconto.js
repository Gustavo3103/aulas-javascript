let desconto = prompt("Digite um cupom de desconto de DESC1 à DESC5, o preço do seu produto é R$100")

switch (desconto) {
    case "DESC1":
        alert(`DESC1 - 5% de desconto. Seu produto de R$100 agora está custando R$${100 - (5% 100)}`);
        break;

    case "DESC2":
        alert(`DESC2 - 10% de desconto. Seu produto de R$100 agora está custando R$${100 - (10% 100)}`);
        break;

    case "DESC3":
        alert(`DESC3 - 15% de desconto. Seu produto de R$100 agora está custando R$${100 - (15% 100)}`);
        break;

    case "DESC4":
        alert(`DESC4 - 20% de desconto. Seu produto de R$100 agora está custando R$${100 - (20% 100)}`);
        break;

    case "DESC5":
        alert(`DESC5 - 25% de desconto Seu produto de R$100 agora está custando R$${100 - (25% 100)}`);
        break;

    default:
        alert(`Informe um cupom de desconto válido! (DESC1 à DESC5)`)
        break;
}

