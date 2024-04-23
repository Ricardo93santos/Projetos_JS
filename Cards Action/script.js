window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.text-card');
  const cardsTexto = document.querySelectorAll('.description-card');
  const cardsimg = document.querySelectorAll('.card-img');

  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      const isExpandido = cardsTexto[index].classList.contains('revelando');
    
      cardsTexto.forEach((texto) => {
        texto.classList.remove('revelando');
      });
      cardsimg.forEach((img) => {
        img.classList.remove('revelando');
      });
    
      if (!isExpandido) {
        cardsTexto[index].classList.add('revelando');
        cardsimg[index].classList.add('revelando');
      }
    });
  });
});
