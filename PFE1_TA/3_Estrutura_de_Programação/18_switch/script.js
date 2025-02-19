let escolha = prompt("Escolha uma opção de alimento: ").toLowerCase();

switch (escolha){
    case "lanche":
        console.log("Escolheu o lanche");
        break;
    case "sorvete":
        console.log("Escolheu o sorvete");
        break;
    case "nutella":
        console.log("Escolheu o nutella");
        break;
    default:
        console.log("Não encontrei nada");
        break;
}