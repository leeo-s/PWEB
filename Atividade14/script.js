function mudaLetra(obj){
    if(obj.value === "maiusculo"){
        const texto = document.getElementById("input").value;
        document.getElementById("input").value = texto.toUpperCase();
    }else if(obj.value === "minusculo"){
        const texto = document.getElementById("input").value;
        document.getElementById("input").value = texto.toLowerCase();
    }
}