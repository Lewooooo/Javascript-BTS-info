let indiceCourant = 0;
const carrousels = document.getElementsByClassName("carrousel");
const prochain = document.getElementById("prochain");
const precedent = document.getElementById("precedent");

prochain.addEventListener("click",prochainclick);
function prochainclick() {
    if (indiceCourant==carrou1.children.length) {
        indiceCourant=0
    }
    indiceCourant=indiceCourant+1
}

precedent.addEventListener("click", precedentclick);
function precedentclick() {
    if (indiceCourant==0) {
        indiceCourant= carrou1.children.length
    }
    indiceCourant=indiceCourant-1
}

if (carrousels.length > 0) {
    let carrou1 = carrousels[0];
    for (i = 1; i < carrou1.children.length; i++) {
        let li = carrou1.children[i];
        li.style.display = "none";
    }
}
