document.addEventListener("DOMContentLoaded",()=>{
    const btn_like = document.getElementById("btn-like");
    const btn_dislike = document.getElementById("btn-dislike");

    const cpt_like = document.getElementById("cpt-like");
    const cpt_dislike = document.getElementById("cpt-dislike");

    btn_like.addEventListener('click',like);
    btn_dislike.addEventListener('click',dislike);
    

    function like() {
        if (btn_like.classList.contains("activelike")) {
            if (cpt_like.textContent>=1) {
                cpt_like.textContent = Number(cpt_like.textContent) - 1;
            }
            btn_like.classList.remove("activelike")
        }else{
            cpt_like.textContent = Number(cpt_like.textContent) + 1;
            btn_like.classList.add("activelike")
            btn_dislike.classList.remove("activedislike")
            if (cpt_dislike.textContent>=1) {
                cpt_dislike.textContent = Number(cpt_dislike.textContent) - 1;
            }
        }
        
        
    }

    function dislike() {
        if (btn_dislike.classList.contains("activedislike")) {
            if (cpt_dislike.textContent>=1) {
                cpt_dislike.textContent = Number(cpt_dislike.textContent) - 1;
            }
            btn_dislike.classList.remove("activedislike")
        }else{
            cpt_dislike.textContent = Number(cpt_dislike.textContent) + 1;
            btn_dislike.classList.add("activedislike")
            btn_like.classList.remove("activelike")
            if (cpt_like.textContent>=1) {
                cpt_like.textContent = Number(cpt_like.textContent) - 1;
            }
        }
    }
})