function validarDados(){

    if (document.forms.formulario1.elements.name.value == "" || document.forms.formulario1.elements.name.value.length < 10) {
        alert("Digite um nome válido! No mínimo 10 caracteres");
        document.getElementById("name").focus();
        return false;
    };

    if (document.forms.formulario1.elements.email.value == "" || document.forms.formulario1.elements.email.value.indexOf('@') == -1 || document.forms.formulario1.elements.email.value.indexOf('.') == -1) {
        alert("Digite um email válido!");
        document.getElementById("email").focus();
        return false;
    };

    if (document.forms.formulario1.elements.coments.value == "" || document.forms.formulario1.elements.coments.value.length < 20) {
        alert("Digite uma mensagem de pelo menos 20 caracteres");
        document.getElementById("coments").focus();
        return false;
    };

    return true;
}

function limparForm(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("coments").value = "";
}

function validarInput(obj){
    if(obj.value == "sim"){
        alert("Que bom que você voltou a visitar está página!")
    }
    else if (obj.value == "nao"){
        alert("Volte sempre a está página!")
    }
}