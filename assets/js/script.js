
// Constantes recebendo valores dos inputs
const inputFirst = document.getElementById('firstName');
const msgErroFirst = document.getElementById('erroFirtsName');
const inputLast = document.getElementById('lastName');
const msgErroLast = document.getElementById('erroLastName');
const inputEmail = document.getElementById('email');
const msgErroEmail = document.getElementById('erroEmail');
const inputPassword = document.getElementById('password');
const msgErroPassword = document.getElementById('erroPassword');
const formulário = document.getElementById('form');
const btnSubmit = document.getElementById('submit');

btnSubmit.addEventListener("click", (e) => {
    // A validação só vai acontecer quando o botão for pressionado
    let firstName = inputFirst.value.trim();
    let lastName = inputLast.value.trim();
    let email = inputEmail.value.trim();
    let password = inputPassword.value.trim();
    let validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    e.preventDefault();

    //First Name
    if (firstName === '' ) {
        inputFirst.classList.add("inputErro");
        inputFirst.setAttribute("placeholder", " ");
        msgErroFirst.style.display = 'flex';
    } else {
        inputFirst.classList.remove("inputErro");
        msgErroFirst.style.display = 'none';
    }
    
    //Last Name
    if (lastName === '' ) {
        inputLast.classList.add("inputErro");
        inputLast.setAttribute("placeholder", " ");
        msgErroLast.style.display = 'flex';
    } else {
        inputLast.classList.remove("inputErro");
        msgErroLast.style.display = 'none';
    }

    //Email
    if (email === '' ) {
        inputEmail.classList.add("inputErro");
        inputEmail.setAttribute("placeholder", " ");
        msgErroEmail.style.display = 'flex';
        msgErroEmail.textContent = "Email cannot be empty"
    } else if(!email.match(validateEmail)) {
        inputEmail.classList.add("inputErro");
        inputEmail.style.color = "hsl(0, 100%, 74%)";
        msgErroEmail.style.display = 'flex';
    } else {
        inputEmail.classList.remove("inputErro");
        inputEmail.style.color = "hsl(0, 0%, 0%)";
        msgErroEmail.style.display = 'none';
        
    }

    //Password 
    if (password === '') {
        inputPassword.classList.add("inputErro");
        inputPassword.setAttribute("placeholder", " ");
        msgErroPassword.style.display = 'flex';
    } else {
        inputPassword.classList.remove("inputErro");
        msgErroPassword.style.display = 'none';
    }
});
