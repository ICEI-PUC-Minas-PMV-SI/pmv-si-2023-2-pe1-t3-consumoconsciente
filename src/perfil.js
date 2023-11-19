const userMock = {
    name: "Sofia Pitta",
    email: "sofiapitta@email.com",
    phone: "(11) 99999-1234",
    password: "123456",
}

let userData

window.addEventListener('pageshow', function () {
    localStorage.setItem("user", JSON.stringify(userMock))
    userData = JSON.parse(localStorage.getItem("user"))
})

// Dropdown logic:
let isDropdownOpen = false
const dropdownContent = document.getElementById('dropdown-content')
document.getElementById('dropdown').addEventListener('click', function () {
    if (!isDropdownOpen) {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
    isDropdownOpen = !isDropdownOpen
})

//Display user resgistered data in inputs:
window.addEventListener('pageshow', function () {
    userDataInputs[1].value = userData.name
    userDataInputs[3].value = userData.email
    userDataInputs[5].value = userData.phone
})

// Edit user data inputs and button behavior:
let editButtonClicked = false
const inputs = document.getElementsByTagName('input')
const editButton = document.getElementById('edit-data')
const passwordButton = document.getElementById('edit-password')
editButton.addEventListener('click', function () {
    if (editButton.innerHTML === "Editar Dados") {
        enableUserDatainputs()
    } else if (editButton.innerHTML === "Salvar") {
        if (editButtonClicked) {
            saveNewUserData()
            disableUserDatainputs()
        }
        else {
            saveNewPassword()
        }
    }
})

// Change password inputs and button behavior:
let passwordButtonClicked = false
const userDataInputs = document.getElementsByClassName('user-data')
let passwordInputs = document.getElementsByClassName('password-change')
const unhidePassButtons = document.getElementsByClassName('unhide-password')
passwordInputs = [...passwordInputs, unhidePassButtons[0], unhidePassButtons[1], unhidePassButtons[2]]
const errorMessageFields = document.getElementsByClassName('error-message')

passwordButton.addEventListener('click', function () {
    if (passwordButton.innerHTML === "Editar Senha") {
        showPasswordInputs()
    } else if (passwordButton.innerHTML === "Cancelar") {
        if (passwordButtonClicked) {
            clearPassInputs()
            showUserDataInputs()
        }
        else
            disableUserDatainputs()
    }
})

//Hide/unhide password logic:
for (let i = 0; i < unhidePassButtons.length; i++) {
    unhidePassButtons[i].addEventListener('click', function () {
        const passInputIndex = 2 * i + 1

        if (passwordInputs[passInputIndex].type === "password")
            passwordInputs[passInputIndex].type = "text"
        else
            passwordInputs[passInputIndex].type = "password"
    })
}

// Enable user data inputs for editing:
const enableUserDatainputs = () => {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = false
        inputs[i].style.backgroundColor = "#E9EDE8"
    }
    passwordButton.innerHTML = "Cancelar"
    editButton.innerHTML = "Salvar"
    editButtonClicked = !editButtonClicked
}

//Show password inputs for editing password:
const showPasswordInputs = () => {
    for (let i = 0; i < userDataInputs.length; i++) {
        userDataInputs[i].style.display = "none"
    }
    for (let j = 0; j < passwordInputs.length; j++) {
        passwordInputs[j].style.display = "inline-block"
    }
    editButton.innerHTML = "Salvar"
    passwordButton.innerHTML = "Cancelar"
    passwordButtonClicked = !passwordButtonClicked
}

//Change from password inputs back to user data inputs:
const showUserDataInputs = () => {
    for (let i = 0; i < userDataInputs.length; i++) {
        userDataInputs[i].style.display = "inline-block"
    }
    for (let j = 0; j < passwordInputs.length; j++) {
        passwordInputs[j].style.display = "none"
    }
    errorMessageFields[0].innerHTML = ""
    errorMessageFields[1].innerHTML = ""
    editButton.innerHTML = "Editar Dados"
    passwordButton.innerHTML = "Editar Senha"
    passwordButtonClicked = !passwordButtonClicked
}

//Disable user data inputs after saving/cancelling:
const disableUserDatainputs = () => {
    for (let j = 0; j < 3; j++) {
        inputs[j].disabled = true
        inputs[j].style.backgroundColor = "#b2bab1"
    }
    passwordButton.innerHTML = "Editar Senha"
    editButton.innerHTML = "Editar Dados"
    editButtonClicked = !editButtonClicked
}

//Save new user data to local storage:
const saveNewUserData = () => {
    userData = {
        ...userData,
        name: userDataInputs[1].value,
        email: userDataInputs[3].value,
        phone: userDataInputs[5].value
    }
    localStorage.removeItem("user")
    localStorage.setItem("user", JSON.stringify(userData))
}

//Save new password to local storage:
const saveNewPassword = () => {
    const validCurrentPassword = userData.password === passwordInputs[1].value
    const newPasswordsMatch = passwordInputs[3].value === passwordInputs[5].value
    const currentPassSameAsNewPass = passwordInputs[1].value === passwordInputs[3].value

    if (validCurrentPassword && newPasswordsMatch && !currentPassSameAsNewPass) {
        userData = {
            ...userData,
            password: passwordInputs[3].value
        }
        localStorage.removeItem("user")
        localStorage.setItem("user", JSON.stringify(userData))
        errorMessageFields[0].innerHTML = ""
        clearPassInputs()
        showUserDataInputs()
    } else if (!validCurrentPassword) {
        errorMessageFields[0].innerHTML = "Senha atual inválida"
    } else if (!newPasswordsMatch) {
        errorMessageFields[1].innerHTML = "Ambas as senhas precisam ser iguais"
    } else {
        errorMessageFields[1].innerHTML = "Sua nova senha deve ser diferente da senha atual"
    }
}

//Clear password inputs:
const clearPassInputs = () => {
    for (let i = 1; i < 6; i += 2) {
        passwordInputs[i].value = ""
        passwordInputs[i].type = "password"
    }
}