function mudaLetra1(obj){
    const texto = document.getElementById("input").value;
    document.getElementById("input").value = texto.toUpperCase();
}

function mudaLetra2(obj){
    const texto = document.getElementById("input").value;
    document.getElementById("input").value = texto.toLowerCase();
}