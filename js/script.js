console.log("Script JS");
let nom = "Dubois";
console.log(nom);
console.log(document);

let monSpan = document.getElementById("monSpan");
monSpan.addEventListener("click", monSpanClick);
function monSpanClick(){
    this.classList.toggle('SpanBlack')
}

let monbouton = document.getElementById("monbouton");
monbouton.addEventListener("click", monboutonclick)

let lesh2 = document.getElementsByTagName("h2");
function monboutonclick() {
    for (let unh2 of lesh2){
        unh2.classList.toggle("cacher");
    }
}

let max = 10;
let min = 1;



function getRandomArbitrary(min, max) {
    return Math.random() * (10 - 1) + 1;
}

let reponse = Math.round(getRandomArbitrary());
console.log(reponse);

let nombre_essaie = 3;
let texte_nombre_essaie = document.getElementById("nombre_essaie");
texte_nombre_essaie.textContent = "nombre essaie : " + nombre_essaie;

let texte_indice = document.getElementById("indice");

let bouton_essaie = document.getElementById("bouton_essaie");
bouton_essaie.addEventListener("click",test_essaie);

let fini = false;

function test_essaie() {
    let input = document.getElementById("texte_essaie").value;
    console.log(reponse);
    if (!fini){
        if (input > reponse) {
            texte_indice.textContent = "C'est moins";
        } else if (input < reponse) {
            texte_indice.textContent = "C'est plus";
        }

        nombre_essaie -= 1;
        texte_nombre_essaie.textContent = "nombre essaie : " + nombre_essaie;
        if (input == reponse){
            console.log("Bien joué");
            document.getElementById("gagner").classList.remove("cacher");
            texte_indice.textContent = "C'est gagné"
            fini = true
        }else{
            if (nombre_essaie <= 0) {
                document.getElementById("perdu").classList.remove("cacher");
                texte_indice.textContent = "C'est perdu"
                fini = true
            }else{
                console.log("Raté");
            }
        }
        
    }
}

let bouton_relancer = document.getElementById('reload');
bouton_relancer.addEventListener('click',reload);

function reload() {
    // reload the current page
    window.location.reload();
}