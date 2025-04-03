let jogador = prompt("Escolha \n1 - Pedra\n2 - Papel\n3 - Tesoura");

let computador = Math.ceil((Math.random() * 10) / 3);

switch(jogador){
    case "1":
        if(computador == 2){
            alert("Jogador: "+"Pedra"+"\n"+"Computador: "+"Papel"+"\n\n"+"Computador Vencedor");
            break;
        }
        else if(computador == 3){
            alert("Jogador: "+"Pedra"+"\n"+"Computador: "+"Tesoura"+"\n\n"+"Jogador Vencedor");
            break;
        }
        else{
            alert("Jogador: "+"Pedra"+"\n"+"Computador: "+"Pedra"+"\n\n"+"Empate");
            break;
        }
    
        case "2":
            if(computador == 1){
                alert("Jogador: "+"Papel"+"\n"+"Computador: "+"Pedra"+"\n\n"+"Jogador Vencedor");
                break;
            }
            else if(computador == 3){
                alert("Jogador: "+"Papel"+"\n"+"Computador: "+"Tesoura"+"\n\n"+"Computador Vencedor");
                break;
            }
            else{
                alert("Jogador: "+"Papel"+"\n"+"Computador: "+"Papel"+"\n\n"+"Empate");
                break;
            }
        
            case "3":
                if(computador == 1){
                    alert("Jogador: "+"Tesoura"+"\n"+"Computador: "+"Pedra"+"\n\n"+"Computador Vencedor");
                    break;
                }
                else if(computador == 2){
                    alert("Jogador: "+"Tesoura"+"\n"+"Computador: "+"Papel"+"\n\n"+"Jogador Vencedor");
                    break;
                }
                else{
                    alert("Jogador: "+"Tesoura"+"\n"+"Computador: "+"Tesoura"+"\n\n"+"Empate");
                    break;
                }
}