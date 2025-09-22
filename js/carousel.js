let indiceCourant = 0;
const carrousels = document.getElementsByClassName("carrousel");
const prochain = document.getElementById("prochain");
const precedent = document.getElementById("precedent");
let carroul1 = carrousels[0]

prochain.addEventListener("click",prochainclick);
function prochainclick() {
    if (indiceCourant==carroul1.children.length-1) {
        indiceCourant=0
    }else{
        indiceCourant=indiceCourant+1
    }
    updateimg()
}

precedent.addEventListener("click", precedentclick);
function precedentclick() {
    if (indiceCourant==0) {
        indiceCourant= carroul1.children.length-1
    }else{
        indiceCourant=indiceCourant-1
    }
    updateimg()
}

if (carrousels.length > 0) {
    let carrou1 = carrousels[0];
    for (i = 1; i < carrou1.children.length; i++) {
        let li = carrou1.children[i];
        li.style.display = "none";
    }
}

function updateimg(){
    console.log(indiceCourant);
    for (i = 0; i < carroul1.children.length; i++) {
        let li = carroul1.children[i];
        li.style.display = "none";
        let leli = carroul1.children[indiceCourant];
        leli.style.display = "block";
    }
}