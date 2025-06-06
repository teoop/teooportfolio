/* =============typing animation============*/
var typed = new Typed(".typing",{
    strings:["Front-End Developer","Back End Developer","Full Stack Developer"],
    typeSpeed:100,
    BackSpeed:10,
    loop:true
})

/* =============Navigation animation============*/
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Retirer la classe active de tous les liens
        document.querySelectorAll('.nav a').forEach(link => {
            link.classList.remove('active');
        });
        
        // Ajouter la classe active au lien cliqué
        this.classList.add('active');
        
        // Faire défiler jusqu'à la section cible
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});