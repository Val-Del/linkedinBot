//maincontainer flex
let mainContainerSliders = document.createElement("div");
mainContainerSliders.classList.add('mainContainerSliders');
mainContainerSliders.classList.add('flex');
document.body.appendChild(mainContainerSliders);

//subcontainer flex min
let subContainerSliders1 = document.createElement("div");
subContainerSliders1.classList.add('subContainerSliders1');
subContainerSliders1.classList.add('flex');
mainContainerSliders.appendChild(subContainerSliders1);

let labelSliderMin = document.createElement("label");
labelSliderMin.classList.add('labelSliderMin');
labelSliderMin.innerHTML = "3s"
subContainerSliders1.appendChild(labelSliderMin);

let updatedSliderMin;
let inputSliderMin = document.createElement("input")
inputSliderMin.classList.add('inputSliderMin');
inputSliderMin.type = "range";
inputSliderMin.value = 3;
inputSliderMin.max = 5;
inputSliderMin.min = 0;
inputSliderMin.step = 1;
inputSliderMin.oninput = function () {
    labelSliderMin.innerHTML = this.value + "s";
    // let i = this.value
    // switch (i) {
    //     case "5":
    //         labelSliderMin.innerHTML = '1s'
    //         break;
    //     case "4":
    //         labelSliderMin.innerHTML = '2s'
    //         break;
    //     case "3":
    //         labelSliderMin.innerHTML = '3s'
    //         break;
    //     case "2":
    //         labelSliderMin.innerHTML = '4s'
    //         break;
    //     case "1":
    //         labelSliderMin.innerHTML = '5s'
    //         break;
    //     case "0":
    //         labelSliderMin.innerHTML = '6s'
    //         break;
    //     default:
    //         break;
    // }
}
subContainerSliders1.appendChild(inputSliderMin);
//subcontainer flex max
let subContainerSliders2 = document.createElement("div");
subContainerSliders2.classList.add('subContainerSliders2');
subContainerSliders2.classList.add('flex');
mainContainerSliders.appendChild(subContainerSliders2);

let updatedSliderMax;
let inputSliderMax = document.createElement("input")
inputSliderMax.classList.add('inputSliderMax');
inputSliderMax.value = 3;
inputSliderMax.max = 5;
inputSliderMax.min = 0;
inputSliderMax.step = 1;
inputSliderMax.type = "range";
inputSliderMax.oninput = function () {
    let i = this.value
    switch (i) {
        case "5":
            labelSliderMin.innerHTML = '11s'
            break;
        case "4":
            labelSliderMin.innerHTML = '10s'
            break;
        case "3":
            labelSliderMin.innerHTML = '9s'
            break;
        case "2":
            labelSliderMin.innerHTML = '8s'
            break;
        case "1":
            labelSliderMin.innerHTML = '7s'
            break;
        case "0":
            labelSliderMin.innerHTML = '6s'
            break;
        default:
            break;
    }
    // labelSliderMax.innerHTML = this.value + "s";
}
subContainerSliders2.appendChild(inputSliderMax);

let labelSliderMax = document.createElement("label");
labelSliderMax.classList.add('labelSliderMax');
labelSliderMax.innerHTML = "3s"
subContainerSliders2.appendChild(labelSliderMax);


