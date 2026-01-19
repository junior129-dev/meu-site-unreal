//Aqui ficará o código para abrir a imagem em tela cheia

// Selecionando todas as imagens da galeria

const imagens = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Adiciona o evento de clique em cada imagem
imagens.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex'; // Mostra o fundo escuro
        lightboxImg.src = img.src; // Coloca a imagem clicada no destaque
    });
});

// Fazendo o botão do slide funcionar

function moveSlide(button, direction){
    const slider = button.parentElement.querySelector('.slides');
    const totalSlides = slider.querySelectorAll('img').length;
    //Pega a posição atual se nao existir começa e 0

    if (!slider.dataset.index) slider.dataset.index = 0;
    let currentIndex = parseInt(slider.dataset.index);
    currentIndex += direction;
    
    //Reinicia se chegar no fim ou no início
    if (currentIndex >= totalSlides) currentIndex = 0;
    if (currentIndex < 0) currentIndex = totalSlides - 1;

    slider.dataset.index = currentIndex;
    
    // Move o slider horizontalmente
    const offset = currentIndex * -100;
    slider.style.transform = `translateX(${offset}%)`;

}