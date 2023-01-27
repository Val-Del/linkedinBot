let rdm = 0
let keepGoing = true

let rdmNumber = document.createElement("p");
rdmNumber.innerHTML = "Random";
rdmNumber.id = "rdm";
document.body.appendChild(rdmNumber);

function random(min, max) { 
         rdm = Math.floor(Math.random() * (max - min + 1) + min)
        rdmNumber.innerHTML = rdm;
        return rdm    
}



let btn = document.createElement("button");
btn.innerHTML = "Ajout";
btn.type = "submit";
btn.name = "addLinkedinAuto";
btn.id = "monBtn";
btn.onclick = function () {
    keepGoing = true
    var buttons = document.querySelectorAll('.artdeco-modal__content footer .artdeco-button__text')
    buttons
    var index = 0;
    function timeOut() {
        if(keepGoing === true) {
            setTimeout(()=>{
                if(buttons[index] == undefined) {
                    buttons = document.querySelectorAll('.artdeco-modal__content footer .artdeco-button__text');
                }
                buttons[index++].click();
                timeOut()
            }, random(4000,9000))
        }else{
            rdmNumber.innerHTML = "Arrêt";
        }
    }
    timeOut()
    
//    setInterval(()=>{
//        if(buttons[index] == undefined) {
//            buttons = document.querySelectorAll('.artdeco-modal__content footer .artdeco-button__text');
//        }
//        buttons[index++].click();
//    }, random(2000,8000))
    };

document.body.appendChild(btn);

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
        if(keepGoing === true) {
            setTimeout(()=>{
                if(buttons[index] == undefined) {
                    buttons = document.querySelectorAll('.invitation-card__action-container .artdeco-button__text');
                }
                buttons[index++].click();
                setTimeout(() => {  document.querySelector('.artdeco-modal--layer-confirmation .artdeco-button--primary').click(); }, 1000);
//                document.querySelector('.artdeco-modal--layer-confirmation .artdeco-button--primary').click();
                timeOutDel()
            }, random(4000,9000))  
        }else{
            rdmNumber.innerHTML = "Arrêt";
        }
        
    }
    timeOutDel()
//    setInterval(()=>{
//        if(buttons[index] == undefined) {
//            buttons = document.querySelectorAll('.invitation-card__action-container .artdeco-button__text');
//        }
//        buttons[index++].click();
//        document.querySelector('.artdeco-modal--layer-confirmation .artdeco-button--primary').click();
//        console.log('delete')
//    }, random(3000,6000))
    };
document.body.appendChild(btnDelete);


let stop = document.createElement("button");
stop.innerHTML = "Stop";
stop.type = "submit";
stop.id = "stop";
stop.onclick = function () {
    keepGoing = false
}
document.body.appendChild(stop);

//let test = document.createElement("button");
//test.innerHTML = "Test go";
//test.type = "submit";
//test.id = "go";
//test.onclick = function () {
//    const url = 'https://www.linkedin.com/mynetwork/'
//    if (window.location.href === url){
//         manage.click()
//
//    }else{
//        window.location.href = url;
//       rdmNumber.innerHTML = "action?";
////            
////            let manage = document.querySelectorAll('.discover-cohort-view__heading .artdeco-button')[0]
////            manage.click()
//    }
//}
//document.body.appendChild(test);






//
//let manage = document.querySelectorAll('.discover-cohort-view__heading .artdeco-button')
//console.log(manage[0])