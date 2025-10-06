document.addEventListener('DOMContentLoaded', () => {
    const btAjouter = document.getElementById('btAjouter');
    const liste = document.getElementById('liste');
    const btSupprimer = document.getElementById('btSupprimer');
    const cpt_boite = document.getElementById("cpt-boite");
    const element_vie = document.getElementById("nombre_essaie");
    const resultat = document.getElementById("resultat");
    const bouton_relancer = document.getElementById('reload');

    let nbr_vie = 2;
    let jeuActif = true;
    let indice_gagant;

    // Initialiser le jeu
    initialiserJeu();

    btAjouter.addEventListener("click", ajouter);
    btSupprimer.addEventListener("click", enlever);
    bouton_relancer.addEventListener('click', reload);

    function initialiserJeu() {
        // Réinitialiser les variables
        nbr_vie = 2;
        jeuActif = true;
        element_vie.textContent = "Vies: " + nbr_vie;
        resultat.textContent = "";
        resultat.className = "";
        
        // Générer un nouvel indice gagnant
        indice_gagant = Math.floor(Math.random() * liste.children.length);
        console.log("Carte gagnante: " + indice_gagant);
        
        // Réinitialiser toutes les cartes
        for (let index = 0; index < liste.children.length; index++) {
            let li = liste.children[index];
            let carte = li.children[0];
            carte.className = "carte";
            
            // Supprimer les anciens événements
            li.replaceWith(li.cloneNode(true));
        }
        
        // Réattribuer les événements
        for (let index = 0; index < liste.children.length; index++) {
            let li = liste.children[index];
            if (index == indice_gagant) {
                li.addEventListener("click", () => gagner(li))
            } else {
                li.addEventListener("click", () => perdre(li))
            }
        }
    }

    function ajouter() {
        if (!jeuActif) return;
        
        let li = document.createElement("li");
        let div = document.createElement("div");
        div.classList.add("carte");
        li.appendChild(div);
        liste.appendChild(li);
        
        // Réinitialiser le jeu avec le nouveau nombre de cartes
        initialiserJeu();
        cpt_boite.textContent = liste.children.length;
    }

    function enlever() {
        if (!jeuActif) return;
        
        if (liste.children.length > 3) {
            liste.lastElementChild.remove();
            // Réinitialiser le jeu avec le nouveau nombre de cartes
            initialiserJeu();
            cpt_boite.textContent = liste.children.length;
        }
    }

    function gagner(li) {
        if (!jeuActif) return;
        
        jeuActif = false;
        resultat.textContent = "Gagné!";
        resultat.className = "gagner";
        li.children[0].classList.add("gagner");
        
        // Désactiver toutes les cartes
        desactiverCartes();
    }

    function perdre(li) {
        if (!jeuActif) return;
        
        nbr_vie -= 1;
        element_vie.textContent = "Vies: " + nbr_vie;
        li.children[0].classList.add("perdu");
        
        if (nbr_vie <= 0) {
            jeuActif = false;
            resultat.textContent = "Perdu!";
            resultat.className = "perdu";
            
            // Révéler la carte gagnante
            let carteGagnante = liste.children[indice_gagant].children[0];
            carteGagnante.classList.add("gagner");
            
            // Désactiver toutes les cartes
            desactiverCartes();
        }
    }

    function desactiverCartes() {
        for (let index = 0; index < liste.children.length; index++) {
            let li = liste.children[index];
            li.replaceWith(li.cloneNode(true));
        }
    }

    function reload() {
        initialiserJeu();
    }
});