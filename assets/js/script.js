
// Constantes recebendo valores dos inputs
const inputFirst = document.getElementById('firstName');
const msgErroFirst = document.getElementById('erroFirtsName');
const inputLast = document.getElementById('lastName');
const msgErroLast = document.getElementById('erroLastName');
const inputEmail = document.getElementById('email');
const msgErroEmail = document.getElementById('erroEmail');
const inputPassword = document.getElementById('password');
const msgErroPassword = document.getElementById('erroPassword');

// Setando funções
function setInputFirst () {
    let inputNameFirst = inputFirst.value;

    if (inputNameFirst == ' ') {
        inputFirst.classList.add('inputErro');
        inputFirst.blur();
        msgErroFirst.style.display = 'flex';
    } else if (inputNameFirst != '') {
        inputFirst.classList.remove('inputErro');
        msgErroFirst.style.display = 'none';
    }
}
function setInputLast () {
    let inputNameLast = inputLast.value;

    if (inputNameLast == ' ') {
        inputLast.classList.add('inputErro');
        inputLast.blur();
        msgErroLast.style.display = 'flex';
    } else if (inputNameLast != '') {
        inputLast.classList.remove('inputErro');
        msgErroLast.style.display = 'none';
    }
}


// Eventos de caputura
inputFirst.addEventListener("keyup", setInputFirst);
inputFirst.addEventListener("focus", () => {
    inputFirst.setAttribute("placeholder", "");
});
inputFirst.addEventListener("blur", () => {
    inputFirst.setAttribute("placeholder", "First Name");
});

inputLast.addEventListener("keyup", setInputLast);
inputLast.addEventListener("focus", () => {
    inputLast.setAttribute("placeholder", "");
});
inputLast.addEventListener("blur", () => {
    inputLast.setAttribute("placeholder", "Last Name");
});
