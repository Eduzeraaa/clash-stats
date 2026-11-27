const slides = document.querySelectorAll('.slide');
const botaoAnterior = document.getElementById('anterior');
const botaoProximo = document.getElementById('proximo');

let slideAtual = 0;

function mostrarSlide() {
  slides.forEach(function (slide) {
    slide.classList.remove('ativo');
  });

  slides[slideAtual].classList.add('ativo');
}

botaoProximo.addEventListener('click', function () {
  slideAtual++;

  if (slideAtual === slides.length) {
    slideAtual = 0;
  }

  mostrarSlide();
});

botaoAnterior.addEventListener('click', function () {
  slideAtual--;

  if (slideAtual < 0) {
    slideAtual = slides.length - 1;
  }

  mostrarSlide();
});
