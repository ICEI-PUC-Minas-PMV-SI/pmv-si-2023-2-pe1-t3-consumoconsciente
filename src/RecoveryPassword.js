
const input = document.getElementById('recovery-input')
let cadastros = JSON.parse(localStorage.getItem('cadastros'))
const alerta = document.getElementById('alerta')
const senhaAlterada = Math.floor(Math.random() * 100000)

const nodemailer = require('nodemailer')
require('dotenv').config()


const transportador = nodemailer.createTransport({
    host: 'smtppro.zoho.com',
    service: 'zoho',
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.SENHA,
    }

})

const emailASerEnviado = {
    from: process.env.EMAIL,
    to: JSON.parse(localStorage.getItem('senhaEmail')).email,
    subject: 'teste de nvio',
    text: 'TESTANDO ENVIO'
}


document.getElementById('recovery').addEventListener('click', function(){
   const isRegistryExist = cadastros.filter(cadastro => {
    return input.value === cadastro.emailusuario
    
   } )
   console.log(isRegistryExist)
   if (isRegistryExist.length === 0){
    alerta.style.display='block'
    alerta.innerHTML='Esse Email não existe'
   }
    else {
        isRegistryExist[0].senha = senhaAlterada

        const cadastrosNovos = cadastros.filter(cadastro => {
            return input.value !== cadastro.emailusuario
            
            
           } )

           transportador.sendMail(emailASerEnviado, (err) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('Email enviado com sucesso')
        })

        cadastros = [...cadastrosNovos, isRegistryExist[0]]
        //localStorage.setItem('senhaEmail', JSON.stringify({senha:senhaAlterada, email:input.value}))
        localStorage.setItem('cadastros', JSON.stringify(cadastros))

        
    }
} )













