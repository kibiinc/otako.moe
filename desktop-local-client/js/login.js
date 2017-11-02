const electron = require('electron')
const { ipcRenderer } = electron

const login = document.querySelector('form')
login.addEventListener('submit', submitForm)

function submitForm(e) {
    location.href = './includes/app.html'
    e.preventDefault();
    console.log("It works!")

    if (bad_login) {
        console.log("It works but bad login info provided.")
    }
}