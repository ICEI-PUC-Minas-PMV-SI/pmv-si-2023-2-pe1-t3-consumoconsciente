const iconButtons = document.querySelectorAll('a')
const logoutButtons = [iconButtons[3], iconButtons[6]]

logoutButtons.forEach(button => {
    button.addEventListener('click', function () {
        const currentUrl = window.location.href
        const characterWherePathBegins = currentUrl.lastIndexOf("/")
        const urlWithoutPath = currentUrl.slice(0, characterWherePathBegins)
        localStorage.removeItem('userlogado')
        window.location.href = `${urlWithoutPath}/login.html`
    })
})