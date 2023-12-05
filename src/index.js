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

transportador.sendMail(emailASerEnviado, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Email enviado com sucesso')
})

