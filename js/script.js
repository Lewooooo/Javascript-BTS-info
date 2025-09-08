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

let lesimg = document.getElementsByTagName("img");
for (let unimg of lesimg){
    unimg.classList.add("cacher");
}

let reponse = Math.round(getRandomArbitrary());
console.log(reponse);

let nombre_essaie = 3;
let texte_nombre_essaie = document.getElementById("nombre_essaie");
texte_nombre_essaie.textContent = "nombre essaie : " + nombre_essaie;

let bouton_essaie = document.getElementById("bouton_essaie");
bouton_essaie.addEventListener("click",test_essaie);

let victoire = false;

function test_essaie() {
    let input = document.getElementById("texte_essaie").value;
    console.log(reponse);
    if (!victoire){
        if (input == reponse){
            if (nombre_essaie > 0){
                nombre_essaie -= 1;
                console.log("Bien joué");
                document.getElementById("gagner").classList.remove("cacher");
                victoire = true
            }
        }else{
            if (nombre_essaie <= 0) {
                document.getElementById("perdu").classList.remove("cacher");
            }else{
                console.log("Raté");
                nombre_essaie -= 1;
            }
            texte_nombre_essaie.textContent = "nombre essaie : " + nombre_essaie;
        }

    }
}
