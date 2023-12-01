const isUserLogged = localStorage.getItem('userlogado')

const buttons = document.querySelectorAll('a')
const headerButtons = [buttons[1], buttons[2], buttons[3], buttons[4], buttons[6], buttons[7], buttons[8], buttons[9]]
const loginButtons = [buttons[5], buttons[10]]

window.addEventListener('pageshow', function () {
    if (!isUserLogged) {
        const currentUrl = window.location.href
        const characterWherePathBegins = currentUrl.lastIndexOf("/")
        const urlWithoutPath = currentUrl.slice(0, characterWherePathBegins)
        const urlPath = currentUrl.slice(characterWherePathBegins + 1, currentUrl.length)
        console.log(urlPath)
        const unloggedUserAllowedPaths = ['index.html', 'login.html', 'cadastro.html', 'dicas.html']
        if (unloggedUserAllowedPaths.indexOf(urlPath) === -1) {
            window.location.href = `${urlWithoutPath}/login.html`
        }
    }
})

if (!isUserLogged) {
    for (const button of headerButtons) {
        button.style.display = "none"
    }

    for (const button of loginButtons) {
        button.style.display = "inline"
    }
}
