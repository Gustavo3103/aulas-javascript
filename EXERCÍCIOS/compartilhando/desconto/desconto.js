let desconto = prompt("Digite um cupom de desconto de DESC1 à DESC5, o preço do seu produto é R$179.99")

switch (desconto) {
    case "DESC1":
        alert(`DESC1 - 5% de desconto. Seu produto de R$179.00 agora está custando R$ ${179.99 - (5% 179.99)}`);
        break;

    case "DESC2":
        alert(`DESC2 - 10% de desconto. Seu produto de R$179.00 agora está custando R$ ${179.99 - (10% 179.99)}`);
        break;

    case "DESC3":
        alert(`DESC3 - 15% de desconto. Seu produto de R$179.00 agora está custando R$ ${179.99 - (15% 179.99)}`);
        break;

    case "DESC4":
        alert(`DESC4 - 20% de desconto. Seu produto de R$179.00 agora está custando R$ ${179.99 - (20% 179.99)}`);
        break;

    case "DESC5":
        alert(`DESC5 - 25% de desconto Seu produto de R$179.00 agora está custando R$ ${179.99 - (25% 179.99)}`);
        break;

    default:
        alert(`Informe um cupom de desconto válido! (DESC1 à DESC5)`)
        break;
}

