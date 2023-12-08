const input = document.getElementById("recovery-input");
let cadastros = JSON.parse(localStorage.getItem("cadastros"));
const alerta = document.getElementById("alerta");
const senhaAlterada = Math.floor(Math.random() * 100000);
const botao = document.getElementById('recovery')

botao.addEventListener("click", function () {
  const isRegistryExist = cadastros.filter((cadastro) => {
    return input.value === cadastro.emailusuario;
  });
  console.log(isRegistryExist);
  if (isRegistryExist.length === 0) {
    alerta.style.display = "block";
    alerta.innerHTML = "Esse Email não existe";
  } else {
    isRegistryExist[0].senha = senhaAlterada;

    const cadastrosNovos = cadastros.filter((cadastro) => {
      return input.value !== cadastro.emailusuario;
    });

    cadastros = [...cadastrosNovos, isRegistryExist[0]];
    //localStorage.setItem('senhaEmail', JSON.stringify({senha:senhaAlterada, email:input.value}))
    localStorage.setItem("cadastros", JSON.stringify(cadastros));

    

    // submit.addEventListener("submit", (e) => {
    //   e.preventDefault();
    //   console.log("Clicado");

      //Codigo do email
      Email.send({
        SecureToken: "b00400a3-3b3a-4d7e-9f3f-9499f4aef428",
        To: `${input.value}`,
        From: "consumo.consciente@eduall.com.br",
        Subject: "Alteração de senha",
        Body: `Segue senha alterada. Utilize essa senha para fazer o login e a altere ${senhaAlterada} `,
    

      }).then((message) => alert(message));
      console.log('tentei enviar')
    // });
  }
});
