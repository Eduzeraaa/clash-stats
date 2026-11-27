const temaClaroSalvo = localStorage.getItem('modoClaro') === 'true';

if (temaClaroSalvo) {
  document.documentElement.classList.add('modo-claro');
}

function aumentarFontes() {
  const textos = document.querySelectorAll('h1, h2, p, a, button, input, textarea');

  textos.forEach(function (texto) {
    texto.dataset.fonteOriginal = texto.style.fontSize;

    const tamanhoAtual = parseFloat(getComputedStyle(texto).fontSize);
    texto.style.fontSize = tamanhoAtual * 1.2 + 'px';
  });
}

function restaurarFontes() {
  const textos = document.querySelectorAll('[data-fonte-original]');

  textos.forEach(function (texto) {
    texto.style.fontSize = texto.dataset.fonteOriginal;
    delete texto.dataset.fonteOriginal;
  });
}

function atualizarBotoes() {
  const botaoFonte = document.getElementById('botao-fonte');
  const botaoTema = document.getElementById('botao-tema');

  if (!botaoFonte || !botaoTema) return;

  const fonteGrande = localStorage.getItem('fonteGrande') === 'true';
  const modoClaro = localStorage.getItem('modoClaro') === 'true';

  botaoFonte.textContent = fonteGrande ? 'Restaurar fonte' : 'Aumentar fonte';
  botaoTema.textContent = modoClaro ? 'Ativar modo escuro' : 'Ativar modo claro';
}

document.addEventListener('DOMContentLoaded', function () {
  const fonteGrande = localStorage.getItem('fonteGrande') === 'true';
  const botaoFonte = document.getElementById('botao-fonte');
  const botaoTema = document.getElementById('botao-tema');

  if (fonteGrande) aumentarFontes();

  if (botaoFonte) {
    botaoFonte.addEventListener('click', function () {
      const estaAtiva = localStorage.getItem('fonteGrande') === 'true';

      if (estaAtiva) {
        restaurarFontes();
      } else {
        aumentarFontes();
      }

      localStorage.setItem('fonteGrande', !estaAtiva);
      atualizarBotoes();
    });
  }

  if (botaoTema) {
    botaoTema.addEventListener('click', function () {
      const estaAtivo = document.documentElement.classList.toggle('modo-claro');

      localStorage.setItem('modoClaro', estaAtivo);
      atualizarBotoes();
    });
  }

  atualizarBotoes();
});
