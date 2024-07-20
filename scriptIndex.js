
/* QUESTS */

const Quests = document.querySelectorAll(".progress");
Quests.forEach(
($quest) => {
    $quest.addEventListener("click", () => {
        openDialog($quest)
    });
}
)

/* DIALOG */    

const CloseDialog = document.querySelector(".close-dialog");
const Dialog = document.querySelector(".dialog");
const Dialog_container = document.querySelector(".dialog-container");

function openDialog ($quest){
let currentQuest = $quest.getAttribute("name");
    switch (currentQuest){
        case "quest1":
            Dialog.showModal();
            Dialog_container.innerHTML = "<h1>Quest 1</h1>" + "<section><p>Hej! Potrzebuję pomocy w zebraniu papaji! Zbierz dla mnie 20, okej?</p> <div class='progress-bar-dialog progress-bar-dialog-1'> 0/1</div> </section>" + "<img src='img/tigerek.png' class='tiger-img dialog-img'>" ;
            break;
        case "quest2":
            Dialog.showModal();
            Dialog_container.innerHTML = "<h1>Quest 2</h1>" + "<section><p>Powtórz ze mną drugi poziom kilka razy!</p> <div class='progress-bar-dialog progress-bar-dialog-3'> 0/3</div> </section>" + "<img src='img/tigerek.png' class='tiger-img dialog-img'>" ;
            break;
        case "quest3":
            Dialog.showModal();
            Dialog_container.innerHTML = "<h1>Quest 3</h1>" + "<section><p>Naucz się ze mną kilku słówek!</p> <div class='progress-bar-dialog progress-bar-dialog-6'> 0/6</div> </section>" + "<img src='img/tigerek.png' class='tiger-img dialog-img'>" 
            break;
    }
}

CloseDialog.addEventListener("click", () =>{
closeDialog();
})

function closeDialog(){
Dialog.close();
}

/* ASIDE */

const Aside = document.querySelector("#aside");
const Body = document.querySelector("body");
const Hamburger = document.querySelector("#hamburger");
const HamburgerImg = document.querySelector("#hamburger-img");
const smallDevice = window.matchMedia("(max-width: 900px)");
let hamburgerOpen;
let asideClosed;

function checkSize(){
if(!smallDevice.matches){

hamburgerOpen = true;
asideClosed = true;
openAside();
}else{
hamburgerOpen = false;
asideClosed = false;
openAside();
}
}

document.addEventListener("DOMContentLoaded", () => {
checkSize();
})
window.addEventListener("resize", () => {
checkSize();
})

function openAside(){
if(asideClosed){
    Aside.style.position = "relative";
    if(hamburgerOpen){
        hamburgerOpen = false;
        HamburgerImg.src = "img/hamburger-open.png";
        Aside.style.display = "none";
        Body.style.gridTemplateColumns = "100%";
    }else{
        hamburgerOpen = true;
        HamburgerImg.src = "img/hamburger-close.png";
        Aside.style.display = "flex";
        Body.style.gridTemplateColumns = "30% 70%";
        
    }
}else{
    if(!hamburgerOpen){
        Aside.style.display = "none";
        Aside.style.position = "relative";
        Body.style.gridTemplateColumns = "100%";
        hamburgerOpen = true;
        HamburgerImg.src = "img/hamburger-close.png";
    }else{
        hamburgerOpen = false;
        HamburgerImg.src = "img/hamburger-open.png";
        Aside.style.display = "flex";
        Aside.style.position = "absolute";
        Aside.style.top = "0px";
        Aside.style.left = "0px";
        Body.style.gridTemplateColumns = "100%";
    }
}
}




Hamburger.addEventListener("click", () =>{
openAside();
})



function levelOne(){
location.href = "levelOne.html";
}
function levelTwo(){
location.href = "levelTwo.html";
}