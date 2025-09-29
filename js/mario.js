document.addEventListener('DOMContentLoaded', () => {
    const btAjouter = document.getElementById('btAjouter');
    const liste = document.getElementById('liste');
    const btSupprimer = document.getElementById('btSupprimer');

    let indice_gagant = Math.floor(Math.random() * liste.children.length);
    console.log(indice_gagant);

    for (let ul of liste.children) {
        ul.addEventListener("click", () => test(ul));
    }

    function test(ul){
        ul.children[0].classList.add("gagner");
    }
});