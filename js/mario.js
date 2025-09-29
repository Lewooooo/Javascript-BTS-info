document.addEventListener('DOMContentLoaded', () => {
    const btAjouter = document.getElementById('btAjouter');
    const liste = document.getElementById('liste');
    const btSupprimer = document.getElementById('btSupprimer');

    let indice_gagant = Math.floor(Math.random() * liste.children.length);
    console.log(indice_gagant);

    for (let index = 0; index < liste.children.length; index++) {
        let li = liste.children[index];
        if (index == indice_gagant) {
            li.addEventListener("click", () => gagner(li))
        } else{
            li.addEventListener("click", () => perdre(li))
        }
    }

    btAjouter.addEventListener("click", ajouter);

    function ajouter() {
        let li = document.createElement("li");
        let div = document.createElement("div");
        div.classList.add("carte");
        li.appendChild(div);
        liste.appendChild(li);
        generate_random(liste.children.length);
        console.log(indice_gagant);
        if (liste.children.length == indice_gagant) {
            li.addEventListener("click", () => gagner(li))
        } else{
            li.addEventListener("click", () => perdre(li))
        }
    }

    function gagner(li){
        li.children[0].classList.add("gagner");
    }
    function perdre(li){
        li.children[0].classList.add("perdu");
    }

    function generate_random(length){
        indice_gagant = Math.floor(Math.random() * length);
    }
});