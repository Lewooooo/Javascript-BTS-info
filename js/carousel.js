let indiceCourant = 0;
const carrousels = document.getElementsByClassName("carrousel");

if (carrousels.length > 0) {
    let carrou1 = carrousels[0];
    for (i = 1; i < carrou1.children.length; i++) {
        let li = carrou1.children[i];
        li.style.display = "none";
    }
}
