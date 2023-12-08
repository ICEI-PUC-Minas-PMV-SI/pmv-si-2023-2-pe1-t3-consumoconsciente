const isUserLogged = localStorage.getItem('userlogado')

const dropDown = document.getElementById('dropdown')
const buttons = document.querySelectorAll('a')
const headerButtons = document.getElementById('nav-right-box')
const loginButtons = [buttons[1], buttons[5]]
const links = document.querySelectorAll('.row')

window.addEventListener('pageshow', function () {
    if (!isUserLogged) {
        const currentUrl = window.location.href
        const characterWherePathBegins = currentUrl.lastIndexOf("/")
        const urlWithoutPath = currentUrl.slice(0, characterWherePathBegins)
        const urlPath = currentUrl.slice(characterWherePathBegins + 1, currentUrl.length)
        const unloggedUserAllowedPaths = ['index.html', 'login.html', 'cadastro.html', 'dicas.html', 'RecoveryPassword.html']
        if (unloggedUserAllowedPaths.indexOf(urlPath) === -1) {
            window.location.href = `${urlWithoutPath}/login.html`
        }
    }
})

if (!isUserLogged) {
    dropDown.style.display = 'none'
    headerButtons.style.display = "none"
    links[1].style.display = 'none'

    for (const button of loginButtons) {
        button.style.display = "inline"
    }
}
