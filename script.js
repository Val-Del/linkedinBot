
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
                console.log(inputSliderMin.value)
                timeOut()
            }, random(1000, 2000))
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
btnDelete.id = "btnDelete";
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
    max = inputSliderMin.value +100
    let rdm = 0
    rdm = Math.floor(Math.random() * (max - min + 1) + min)
    rdm = Math.floor(rdm/100)*100; //arrondir ex : 5112 > 5100 
    decreaseTimer(rdm)
    return rdm
}
function decreaseTimer(timer){
        rdmNumber.classList.add('timer')
        rdmNumber.innerHTML = timer;
        let chrono = setInterval(() => {
            if (keepGoing === true) {
                if (timer<100) {
                    divTimer.innerHTML = 0;
                    clearInterval(chrono);
                }else {
                    timer -= 100;
                    rdmNumber.innerHTML = timer;
                }   
            } else {
                clearInterval(chrono);
            }     
                
        }, 100);
    
}

let containerSlider = document.createElement("div");
containerSlider.classList.add('containerSlider');
containerSlider.classList.add('flex');
document.body.appendChild(containerSlider);

let labelSliderMin = document.createElement("label");
labelSliderMin.classList.add('labelSliderMin');
labelSliderMin.innerHTML = "5s"
containerSlider.appendChild(labelSliderMin);

let updatedSliderMin;
let inputSliderMin = document.createElement("input")
inputSliderMin.classList.add('inputSlider');
inputSliderMin.type = "range";
inputSliderMin.value = 5;
inputSliderMin.max = 12;
inputSliderMin.min = 0;
inputSliderMin.step = 1;
inputSliderMin.oninput = function () {
    labelSliderMin.innerHTML = this.value + "s";
}
containerSlider.appendChild(inputSliderMin);

let btnSetting =document.createElement("div");
btnSetting.classList.add('btnSettings');
containerSlider.appendChild(btnSetting);


btnSetting.addEventListener('click', function(event) {
  containerSlider.classList.toggle('clicked');
});


