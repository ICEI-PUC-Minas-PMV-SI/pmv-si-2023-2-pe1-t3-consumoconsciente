//Dropdown logic:

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

// Edit user data logic:

let editButtonClicked = false
const inputs = document.getElementsByTagName('input')
const editButton = document.getElementById('edit-data')
const passwordButton = document.getElementById('edit-password')
editButton.addEventListener('click', function () {
    if (editButton.innerHTML === "Editar Dados") {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].disabled = false
            inputs[i].style.backgroundColor = "#E9EDE8"
        }
        passwordButton.style.display = "none"
        editButton.innerHTML = "Salvar"
        editButtonClicked = !editButtonClicked
    } else {
        for (let j = 0; j < 4; j++) {
            inputs[j].disabled = true
            inputs[j].style.backgroundColor = "#b2bab1"
        }
        passwordButton.style.display = "inline-block"
        editButton.innerHTML = "Editar Dados"
        editButtonClicked = !editButtonClicked
    }
})

// Change password logic:

let passwordButtonClicked = false
const userDataInputs = document.getElementsByClassName('user-data')
let passwordInputs = document.getElementsByClassName('password-change')
const unhidePassButton1 = document.getElementById('unhide-password1')
const unhidePassButton2 = document.getElementById('unhide-password2')
const unhidePassButton3 = document.getElementById('unhide-password3')
passwordInputs = [...passwordInputs, unhidePassButton1, unhidePassButton2, unhidePassButton3]

passwordButton.addEventListener('click', function () {


    if (passwordButton.innerHTML === "Editar Senha") {
        for (let i = 0; i < userDataInputs.length; i++) {
            userDataInputs[i].style.display = "none"
        }
        for (let j = 0; j < passwordInputs.length; j++) {
            passwordInputs[j].style.display = "inline-block"
        }
        editButton.style.display = "none"
        passwordButton.innerHTML = "Salvar"
        passwordButtonClicked = !passwordButtonClicked
    } else {
        for (let i = 0; i < userDataInputs.length; i++) {
            userDataInputs[i].style.display = "inline-block"
        }
        for (let j = 0; j < passwordInputs.length; j++) {
            passwordInputs[j].style.display = "none"
        }
        editButton.style.display = "inline-block"
        passwordButton.innerHTML = "Editar Senha"
        passwordButtonClicked = !passwordButtonClicked
    }
})

unhidePassButton1.addEventListener('click', function () {
    if (passwordInputs[1].type === "password")
        passwordInputs[1].type = "text"
    else
        passwordInputs[1].type = "password"
})
unhidePassButton2.addEventListener('click', function () {
    if (passwordInputs[3].type === "password")
        passwordInputs[3].type = "text"
    else
        passwordInputs[3].type = "password"
})
unhidePassButton3.addEventListener('click', function () {
    if (passwordInputs[5].type === "password")
        passwordInputs[5].type = "text"
    else
        passwordInputs[5].type = "password"
})