timer = 5010;
timer = Math.floor(timer / 100) * 100;
let divTimer = document.querySelector('.test')
function decreaseTimer(){
    divTimer.innerHTML = timer;
    let chrono = setInterval(() => {
        timer -= 100;
        divTimer.innerHTML = timer;
        if (timer<100) {
            divTimer.innerHTML = 0;
            clearInterval(chrono);
        }
    }, 100);
    // console.log(divTimer)
}
decreaseTimer()