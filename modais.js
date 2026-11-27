const decks = {
  'modal-zen-hog': {
    canvas: 'grafico-zen-hog',
    vitorias: 686,
    derrotas: 189
  },
  'modal-rocket-cycle': {
    canvas: 'grafico-rocket-cycle',
    vitorias: 319,
    derrotas: 145
  },
  'modal-splashyard': {
    canvas: 'grafico-splashyard',
    vitorias: 67,
    derrotas: 58
  }
};

// Guarda os gráficos já criados para não criar o mesmo gráfico duas vezes.
const graficosCriados = {};

function criarGraficoDoDeck(modalId) {
  if (graficosCriados[modalId]) return;

  const dados = decks[modalId];
  const total = dados.vitorias + dados.derrotas;
  const winrateDoDeck = ((dados.vitorias / total) * 100).toFixed(1);

  const textoCentral = {
    id: `texto-central-${modalId}`,
    afterDraw(chart) {
      const { ctx, chartArea } = chart;

      if (!chartArea) return;

      ctx.save();
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        `${winrateDoDeck}%`,
        (chartArea.left + chartArea.right) / 2,
        (chartArea.top + chartArea.bottom) / 2
      );
      ctx.restore();
    }
  };

  graficosCriados[modalId] = new Chart(document.getElementById(dados.canvas), {
    type: 'doughnut',
    data: {
      labels: ['Vitórias', 'Derrotas'],
      datasets: [{
        data: [dados.vitorias, dados.derrotas],
        backgroundColor: ['#01c001', '#ff0000'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: false,
      cutout: '58%',
      plugins: {
        legend: {
          labels: {
            color: '#ffffff',
            font: { size: 15 }
          }
        }
      }
    },
    plugins: [textoCentral]
  });
}

function fecharModal(modal) {
  modal.classList.remove('aberto');
}

document.querySelectorAll('.abrir-modal').forEach((botao) => {
  botao.addEventListener('click', () => {
    const modalId = botao.dataset.modal;
    const modal = document.getElementById(modalId);

    modal.classList.add('aberto');
    criarGraficoDoDeck(modalId);
  });
});

document.querySelectorAll('.fechar-modal').forEach((botao) => {
  botao.addEventListener('click', () => fecharModal(botao.closest('.modal')));
});

document.querySelectorAll('.modal').forEach((modal) => {
  modal.addEventListener('click', (evento) => {
    if (evento.target === modal) fecharModal(modal);
  });
});

document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape') {
    const modalAberto = document.querySelector('.modal.aberto');
    if (modalAberto) fecharModal(modalAberto);
  }
});
