
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
