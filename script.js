
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
        if (keepGoing === true && isModalOpen()==true) {
            setTimeout(() => {
                if (buttons[index] == undefined) {
                    buttons = document.querySelectorAll('.artdeco-modal__content footer .artdeco-button__text');
                }
                buttons[index++].click();
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

function random() {
    min = inputSliderMin.value * 1000
    console.log(min)
    max = inputSliderMax.value * 1000
    console.log(max)
    let rdm = 0

    rdm = Math.floor(Math.random() * (max - min + 1) + min)
    rdm = Math.floor(rdm/100)*100; //arrondir ex : 5112 > 5100 
    decreaseTimer(rdm)
    console.log(rdm)
    return rdm
}
function decreaseTimer(timer){
        rdmNumber.classList.add('timer')
        rdmNumber.innerHTML = timer;
        let chrono = setInterval(() => {
            if (keepGoing === true) {
                if (timer<100) {
                    rdmNumber.innerHTML = 0;
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

let containerSliderMax = document.createElement("div");
containerSliderMax.classList.add('containerSliderMax');
containerSliderMax.classList.add('flex');
containerSliderMax.setAttribute('title', 'Interval maximum');
document.body.appendChild(containerSliderMax);

let labelSliderMax = document.createElement("label");
labelSliderMax.classList.add('labelSliderMax');
labelSliderMax.innerHTML = "5s"
containerSliderMax.appendChild(labelSliderMax);

let inputSliderMax = document.createElement("input")
inputSliderMax.classList.add('inputSlider');
inputSliderMax.type = "range";
inputSliderMax.value = 5;
inputSliderMax.max = 12;
inputSliderMax.min = 0;
inputSliderMax.step = 1;
inputSliderMax.oninput = function () {
    
    if (parseInt(this.value) < parseInt(inputSliderMin.value)) {
        inputSliderMin.value = this.value;
        labelSliderMin.innerHTML = inputSliderMax.value + "s";
    }
    labelSliderMax.innerHTML = this.value + "s";
    
}


containerSliderMax.appendChild(inputSliderMax);

let btnSetting =document.createElement("div");
btnSetting.classList.add('btnSettings');
containerSliderMax.appendChild(btnSetting);

btnSetting.addEventListener('click', function(event) {
    containerSliderMax.classList.toggle('clicked');
});

//interval minimum
let containerSliderMin = document.createElement("div");
containerSliderMin.classList.add('containerSliderMin');
containerSliderMin.classList.add('flex');
containerSliderMin.setAttribute('title', 'Interval minimum');
document.body.appendChild(containerSliderMin);

let labelSliderMin = document.createElement("label");
labelSliderMin.classList.add('labelSliderMin');
labelSliderMin.innerHTML = "3s"
containerSliderMin.appendChild(labelSliderMin);

let inputSliderMin = document.createElement("input")
inputSliderMin.classList.add('inputSlider');
inputSliderMin.type = "range";
inputSliderMin.value = 3;
inputSliderMin.max = 12;
inputSliderMin.min = 0;
inputSliderMin.step = 1;
inputSliderMin.oninput = function () {
    console.log(this.value)
    console.log(inputSliderMax.value)
    if (parseInt(this.value) > parseInt(inputSliderMax.value)) {
        inputSliderMax.value = this.value;
        console.log('in loop')
    }
    labelSliderMin.innerHTML = this.value + "s";
    labelSliderMax.innerHTML = inputSliderMax.value + "s";
}
containerSliderMin.appendChild(inputSliderMin);

let btnSettingMin =document.createElement("div");
btnSettingMin.classList.add('btnSettings');
containerSliderMin.appendChild(btnSettingMin);
// /
btnSettingMin.addEventListener('click', function(event) {
  containerSliderMin.classList.toggle('clicked');
});

function isModalOpen(){
    // console.log(document.body.classList.contains("artdeco-modal-is-open"))
   return document.body.classList.contains("artdeco-modal-is-open")
}

