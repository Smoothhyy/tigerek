const InfoBtns = document.querySelectorAll(".info-btn");
console.log(InfoBtns);

InfoBtns.forEach( $currentHoverItem =>{
$currentHoverItem.addEventListener("mouseover", () => {
    if($currentHoverItem == InfoBtns[0]){
        checkIfItemIsVisible("Konto", $currentHoverItem);
    }
    else if($currentHoverItem == InfoBtns[1]){
        checkIfItemIsVisible("Strona główna", $currentHoverItem);
    }
    else if($currentHoverItem ==InfoBtns[2]){
        checkIfItemIsVisible("Pomoc", $currentHoverItem);
    }
})
$currentHoverItem.addEventListener("mouseout", () => {
    checkIfItemIsNotVisible($currentHoverItem);
})
})
function checkIfItemIsVisible(itemName, itemContainer){
    itemContainer.setAttribute('data-tooltip', `${itemName}`);
    (itemName);
    
}
function checkIfItemIsNotVisible(itemContainer){
    itemContainer.removeAttribute('data-tooltip');
}