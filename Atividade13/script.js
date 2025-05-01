function abriu(obj){
   document.getElementById("texto").innerText = "Janela Aberta"
    document.getElementById("imagem").setAttribute("src", "images/janelaaberta.png");
}

function quebrou(obj){
    document.getElementById("texto").innerText = "Janela Quebrada"
    document.getElementById("imagem").setAttribute("src", "images/janelaquebra.png");
}

function fechou(obj){
    document.getElementById("texto").innerText = "Janela Fechada"
    document.getElementById("imagem").setAttribute("src", "images/janelafechada.png");
}