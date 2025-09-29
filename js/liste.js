document.addEventListener('DOMContentLoaded', () => {
    const btAjouter = document.getElementById('btAjouter');
    const valeur = document.getElementById('valeur');
    const liste = document.getElementById('liste');
    const btSupprimer = document.getElementById('btSupprimer');
    let elementSelect = null;
    document.addEventListener("keydown", documentKeydown);

    if ((valeur)&&(btAjouter)&&(liste)&&(btSupprimer)) {
        valeur.addEventListener("keydown", valeurKeyDown);
        btAjouter.addEventListener("click", btAjouterClick);   
        btSupprimer.addEventListener("click", btSupprimerClick);
        for (let enfantLi of liste.children) {
            enfantLi.addEventListener("mouseenter", liMouseEnter);
            enfantLi.addEventListener("mouseleave", liMouseLeave);
            enfantLi.addEventListener("click", liClick);
        }
    }else{
        console.error("Un composant n'a pas le bon identifiant");
    }

    function btAjouterClick() {
        let val = valeur.value;
        if(val !== ""){
            let li = document.createElement("li");
            li.addEventListener("mouseenter", liMouseEnter);
            li.addEventListener("mouseleave", liMouseLeave);
            li.addEventListener("click", liClick);
            li.textContent = val;
            liste.appendChild(li);
            valeur.value = "";
        }
        valeur.focus();
    }

    function valeurKeyDown(event) {
        console.log(`Touche pressée (keydown) : ${event.key} (code: ${event.code})`);
        if (event.code == 'Enter' || event.code == 'NumpadEnter') {
            btAjouterClick();
        }

    }

    function liMouseEnter(){
        this.classList.add("survol")
    }

    function liMouseLeave(){
        this.classList.remove("survol")
    }

    function liClick(){
        elementSelect=this;
        this.classList.toggle("click")
    }

    function btSupprimerClick(){
        let liSups = document.querySelectorAll(".click");
        for(let liSup of liSups){
            liSup.remove();
        }
    }

   function documentKeydown(event){
        console.log(event.code);
        if (event.code=="Delete"){
            if (elementSelect){
                elementSelect.remove();
            }
        }
   }

});