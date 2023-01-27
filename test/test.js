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
subContainerSliders1.appendChild(labelSliderMin);

let inputSliderMin = document.createElement("input")
inputSliderMin.classList.add('inputSliderMin');
inputSliderMin.type = "range";
inputSliderMin.value = 3;
inputSliderMin.max = 5;
inputSliderMin.min = 0;
inputSliderMin.step = 1;
subContainerSliders1.appendChild(inputSliderMin);
//subcontainer flex max
let subContainerSliders2 = document.createElement("div");
subContainerSliders2.classList.add('subContainerSliders2');
subContainerSliders2.classList.add('flex');
mainContainerSliders.appendChild(subContainerSliders2);

let labelSliderMax = document.createElement("label");
labelSliderMax.classList.add('labelSliderMax');
subContainerSliders2.appendChild(labelSliderMax);

let inputSliderMax = document.createElement("input")
inputSliderMax.classList.add('inputSliderMax');
subContainerSliders2.appendChild(inputSliderMax);
inputSliderMax.value = 3;
inputSliderMax.max = 5;
inputSliderMax.min = 0;
inputSliderMax.step = 1;
inputSliderMax.type = "range";
