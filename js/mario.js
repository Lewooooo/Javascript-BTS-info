document.addEventListener('DOMContentLoaded', () => {
    const btAjouter = document.getElementById('btAjouter');
    const liste = document.getElementById('liste');
    const btSupprimer = document.getElementById('btSupprimer');
    const cpt_boite = document.getElementById("cpt-boite");
    let nbr_vie = document.getElementById("nombre_essaie");
    let resultat = document.getElementById("resultat");

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
    btSupprimer.addEventListener("click", enlever);

    function ajouter() {
        let li = document.createElement("li");
        let div = document.createElement("div");
        cpt_boite.textContent = Number(cpt_boite.textContent) + 1;
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

    function enlever() {
        if (cpt_boite.textContent>=4) {
            cpt_boite.textContent = Number(cpt_boite.textContent) - 1;
            div.classList.remove("carte");
            li.removeChild(div);
            liste.removeChild(li);
            generate_random(liste.children.length);  
        }
        console.log(indice_gagant);
        if (liste.children.length == indice_gagant) {
            li.addEventListener("click", () => gagner(li))
        } else{
            li.addEventListener("click", () => perdre(li))
        }
    }

    function gagner(li){
        nbr_vie.textContent = "Vie: " + Number(nbr_vie.textContent) -1;
        resultat.textContent = "Gagner";
        li.children[0].classList.add("gagner");
    }
    function perdre(li){
        if (nbr_vie.textContent=0) {
            resultat.textContent = "Perdu";
        }else{
            nbr_vie.textContent = "Vie: " + Number(nbr_vie.textContent) -1;
        }
        li.children[0].classList.add("perdu");
    }

    function generate_random(length){
        indice_gagant = Math.floor(Math.random() * length);
    }

    let bouton_relancer = document.getElementById('reload');
    bouton_relancer.addEventListener('click', reload);

    function reload() {
        window.location.reload();
    }
});