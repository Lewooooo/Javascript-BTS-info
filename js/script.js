console.log("Script JS");
let nom = "Dubois";
console.log(nom);
console.log(document);

let monSpan = document.getElementById("monSpan");
monSpan.addEventListener("click", monSpanClick);
function monSpanClick(){
    this.classList.toggle('SpanBlack')
}

let lesh2 = document.getElementsByTagName("h2");
for (let unh2 of lesh2){
    unh2.classList.add("cacher");
}

let monbouton = document.getElementById("monbouton");
monbouton.addEventListener("click", monboutonclick)
function monboutonclick() {
    for (let unh2 of lesh2){
        unh2.classList.toggle("cacher");
    }
}
monbouton.textContent="Afficher/Cacher"

let max = 10;
let min = 1;

function getRandomArbitrary(min, max) {
    return Math.random() * (10 - 1) + 1;
}
console.log(Math.round(getRandomArbitrary()));

let lesimg = document.getElementsByTagName("img");
for (let unimg of lesimg){
    unimg.classList.add("cacher");
}
