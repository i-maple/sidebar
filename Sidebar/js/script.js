window.onload=()=>{

    function navActive() {

        
        const bars = document.querySelector('.bx-menu');
        const nav = document.querySelector('.sidebar');
        
        bars.addEventListener('click', ()=>{
            nav.classList.toggle('active');
        });
    }
    navActive();
}
