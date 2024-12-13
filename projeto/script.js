    // Seleciona o botão
    const backToTopButton = document.getElementById('backToTop');

    // Rola suavemente até o topo ao clicar no botão
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
