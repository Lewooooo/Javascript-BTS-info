document.addEventListener("DOMContentLoaded",()=>{
    const btn_like = document.getElementById("btn-like");
    const btn_dislike = document.getElementById("btn-dislike");

    const cpt_like = document.getElementById("cpt-like");
    const cpt_dislike = document.getElementById("cpt-dislike");

    btn_like.addEventListener('click',like);
    btn_dislike.addEventListener('click',dislike);
    

    function like() {
        cpt_like.textContent = Number(cpt_like.textContent) + 1;
    }

    function dislike() {
        cpt_dislike.textContent = Number(cpt_dislike.textContent) + 1;
    }
})