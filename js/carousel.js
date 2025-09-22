let image_carousel = document.getElementById("image-carousel");
let btn_next = document.getElementById("btn-next");
btn_next.addEventListener("click",nextImage);

let images_src = ["330x192.jpg","poucebleu.jpg"];


let cpt_image = 0;
function nextImage(){
    image_carousel.src = "image/"+images_src[cpt_image];
    cpt_image ++;
}
