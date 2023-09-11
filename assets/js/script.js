const inputFirst = document.getElementById('firstName');
const msgErroFirst = document.getElementById('erroFirtsName');

function setInputFirst () {
    let inputNameFirst = inputFirst.value;

    if (inputNameFirst == '') {
        inputFirst.classList.add('inputErro');
        inputFirst.blur();
        msgErroFirst.style.display = 'flex';
    }
}



inputFirst.addEventListener("keyup", setInputFirst);
inputFirst.addEventListener("focus", () => {
    inputFirst.setAttribute("placeholder", "");
});
inputFirst.addEventListener("blur", () => {
    inputFirst.setAttribute("placeholder", "First Name")
});