let rdm = 0
let keepGoing = true

let rdmNumber = document.createElement("p");
rdmNumber.innerHTML = "Random";
rdmNumber.id = "rdm";
document.body.appendChild(rdmNumber);

let btnAdd = document.createElement("button");
btnAdd.innerHTML = "Ajout";
btnAdd.type = "submit";
btnAdd.name = "addLinkedinAuto";
btnAdd.id = "btnAdd";
btnAdd.onclick = function () {
    keepGoing = true
    var buttons = document.querySelectorAll('.artdeco-modal__content footer .artdeco-button__text');
    var index = 0;
    function timeOut() {
        if (keepGoing === true) {
            setTimeout(() => {
                if (buttons[index] == undefined) {
                    buttons = document.querySelectorAll('.artdeco-modal__content footer .artdeco-button__text');
                }
                buttons[index++].click();
                timeOut()
            }, random(4000, 9000))
        } else {
            rdmNumber.innerHTML = "Arrêt";
        }
    }
    timeOut()
};

document.body.appendChild(btnAdd);

let btnDelete = document.createElement("button");
btnDelete.innerHTML = "Supprime";
btnDelete.type = "submit";
btnDelete.name = "addLinkedinAuto";
btnDelete.id = "monBtn2";
btnDelete.onclick = function () {
    keepGoing = true
    var buttons = document.querySelectorAll('.invitation-card__action-container .artdeco-button__text')
    buttons
    var index = 0;
    function timeOutDel() {
        if (keepGoing === true) {
            setTimeout(() => {
                if (buttons[index] == undefined) {
                    buttons = document.querySelectorAll('.invitation-card__action-container .artdeco-button__text');
                }
                buttons[index++].click();
                setTimeout(() => { document.querySelector('.artdeco-modal--layer-confirmation .artdeco-button--primary').click(); }, 1000);
                timeOutDel()
            }, random(4000, 9000))
        }
    }
    timeOutDel()
};
document.body.appendChild(btnDelete);

let stop = document.createElement("button");
stop.innerHTML = "Stop";
stop.type = "submit";
stop.id = "stop";
stop.onclick = function () {
    keepGoing = false
    rdmNumber.innerHTML = "Arrêt";
    rdmNumber.classList.remove('timer')
}
document.body.appendChild(stop);

function random(min, max) {
    rdm = Math.floor(Math.random() * (max - min + 1) + min)
    rdmNumber.innerHTML = rdm;
    rdmNumber.classList.add('timer')
    return rdm
}