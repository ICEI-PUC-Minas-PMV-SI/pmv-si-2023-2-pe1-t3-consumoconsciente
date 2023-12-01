function changebutton() {
    let perfilid = document.querySelector("#perfilid");
    let loginbar = document.querySelector("#loginbar");
    let logout = document.querySelector("#logout");

    const usuarioLogado = JSON.parse(localStorage.getItem("userlogado"));
    if (usuarioLogado.emailusuario != undefined) {
        perfilid.setAttribute("style", "display: block")
        loginbar.setAttribute("style", "display: none")
        logout.setAttribute("style", "display: block")
    } else {
        perfilid.setAttribute("style", "display: none")
        loginbar.setAttribute("style", "display: block")
        logout.setAttribute("style", "display: none")
    }

}

function logout() {
    localStorage.removeItem('userlogado')
    location.reload();
}

function campos() {
    var login = document.getElementById("user");
    var senha = document.getElementById("password");

    if (login.value == "" || senha.value == "") {
        msgFormulario.setAttribute("style", "display: block")
        msgFormulario.innerHTML = "Preencha todos os campos"
    } else {
        msgFormulario.setAttribute("style", "display: none")
        logar()
    }
}



function logar() {
    let usuario = {
        login: document.getElementById('user').value,
        senha: document.getElementById('password').value
    }

    let cadastros = []

    let logado = false;

    let uservalid;

    cadastros = JSON.parse(localStorage.getItem('cadastros'))

    cadastros.forEach((item) => {
        if (usuario.login == item.nomeusuario && usuario.senha == item.senha) {

            uservalid = {
                nomeusuario: item.nomeusuario,
                emailusuario: item.emailusuario,
                telefoneusuario: item.telefoneusuario,
                senha: item.senha,
                id: item.id
            }

            logado = true;

            localStorage.setItem("userlogado", JSON.stringify(uservalid));

        }
    })


    function cincoseg() {
        window.location.href = "/src/index.html";
    }

    if (logado) {
        msgError.setAttribute("style", "display: none")
        msgSuccess.setAttribute("style", "display: block")
        msgSuccess.innerHTML = "Logado com Sucesso"
        setTimeout(cincoseg, 1000 * 2);
        limparform();

    } else {
        msgError.setAttribute("style", "display: block")
        msgError.innerHTML = "Senha ou usuário inválido"
    }

    function limparform() {
        document.getElementById("user").value = "";
        document.getElementById("password").value = "";

    }


}