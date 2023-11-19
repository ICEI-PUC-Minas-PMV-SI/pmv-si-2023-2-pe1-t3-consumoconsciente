
/*Validação de senhas*/

function campos(){
    var senha = document.getElementById("senha");
    var confirm_senha = document.getElementById("confirmsenha");
    var email = document.getElementById("email");
    var nome = document.getElementById("nome");
    var tel = document.getElementById("tel");
    let msgFormulario = document.querySelector("#msgFormulario");

    if(senha.value == "" || confirm_senha.value == "" || email == "" || nome == "" || tel == ""){
        msgError.setAttribute("style", "display: none")
        msgFormulario.setAttribute("style", "display: block")
        msgSuccess.setAttribute("style", "display: none")
        msgFormulario.innerHTML = "Preencha todos os campos"
    } else{
        validatesenha()
    }
}
function validatesenha(){
    let msgError = document.querySelector("#msgError");
    let msgSuccess = document.querySelector("#msgSuccess");
    var senha = document.getElementById("senha");
    var confirm_senha = document.getElementById("confirmsenha");

    if(senha.value != confirm_senha.value) {
        msgFormulario.setAttribute("style", "display: none"),
        confirm_senha.setCustomValidity(
        msgError.setAttribute("style", "display: block"),
        msgError.innerHTML = "Senhas não conferem"
        );
        limparformsenhas()
    } else {
        msgFormulario.setAttribute("style", "display: none")
        msgError.setAttribute("style", "display: none")
        confirm_senha.setCustomValidity(
            msgSuccess.setAttribute("style", "display: block"),
            msgSuccess.innerHTML = "Cadastrado com Sucesso"
        );
        cadastroNovo();
        limparform();
    }

    //senha.onchange = validatesenha;
    //confirm_senha.onkeyup = validatesenha;
}

/*Vetor cadastros*/
let bancoContatos = JSON.parse (    localStorage.getItem("cadastros")   );

if(!bancoContatos){
 bancoContatos = [
        {
            "nomeusuario": "Jorge",
            "emailusuario": "jorgecampos@hotmail.com",
            "telefoneusuario": "(31) 99845 - 5643",
            "senha" : "coxinha123"
        },
        {
            "nomeusuario": "Maria",
            "emailusuario": "mariacampos@hotmail.com",
            "telefoneusuario": "(31) 99845 - 5643",
            "senha" : "coxinha321"
        }
    ]
}

/*Função Limpar formulário*/
function limparform(){
    document.getElementById("nome").value="";
    document.getElementById("email").value="";
    document.getElementById("tel").value="";
    document.getElementById("confirmsenha").value="";
    document.getElementById("senha").value="";

}

function limparformsenhas(){
    document.getElementById("confirmsenha").value="";
    document.getElementById("senha").value="";

}


/*Função Cadastro*/
function cadastroNovo(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var senha = document.getElementById("senha").value;

    var novoCadastro = {
        "nomeusuario": nome,
        "emailusuario": email,
        "telefoneusuario": tel,
        "senha" : senha
    }

    bancoContatos.push(novoCadastro);
    localStorage.setItem("userlogado",   JSON.stringify(novoCadastro));
    localStorage.setItem("cadastros",   JSON.stringify(bancoContatos));
    console.log(bancoContatos);

}


