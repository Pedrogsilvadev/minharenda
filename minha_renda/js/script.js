document.addEventListener('DOMContentLoaded', function() {
    // Inicialização do carrossel com mais configurações
    const myCarousel = document.querySelector('#carouselExampleAutoplaying');
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000,  // Troca de slides a cada 3 segundos
        pause: 'hover'   // Pausa o carrossel quando o mouse está sobre ele
    });

    // Destacar texto ao clicar na navbar
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita o comportamento padrão do link

            // Remove a classe 'highlight-text' de todas as seções
            document.querySelectorAll('.main-section').forEach(section => section.classList.remove('highlight-text'));

            // Remove a classe 'active' de todos os links
            navLinks.forEach(nav => nav.classList.remove('active'));

            // Adiciona a classe 'highlight-text' à seção correspondente
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.classList.add('highlight-text');
            }

            // Adiciona a classe 'active' ao link clicado
            this.classList.add('active');

            // Faz a rolagem suave para a seção
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
    