let indiceCourant=0;
const carrousels=document.getElementsByClassName("carrousel");

for (i=1;i<carrousels.children.length;i++) {
    let li=carrousels.children[i];
    li.style.display="none";
}

