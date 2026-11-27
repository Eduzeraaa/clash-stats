const vitorias = 5163;
const derrotas = 3866;
const totalPartidas = vitorias + derrotas;
const winrate = ((vitorias / totalPartidas) * 100).toFixed(1);
const corTextoGrafico = document.documentElement.classList.contains('modo-claro')
  ? '#071a33'
  : '#ffffff';

const dadosGrafico = {
  labels: ['Vitórias', 'Derrotas'],
  datasets: [{
    label: 'Win rate',
    data: [vitorias, derrotas],
    backgroundColor: [
      '#36d17c',
      '#ff6b76'
    ],
    hoverOffset: 4
  }]
};

// Plugin do Chart.js que escreve a porcentagem no centro do gráfico.
const textoWinrate = {
  id: 'textoWinrate',
  afterDraw(chart) {
    const { ctx, chartArea } = chart;

    if (!chartArea) return;

    ctx.save();
    ctx.fillStyle = corTextoGrafico;
    ctx.font = 'bold 28px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(
      `${winrate}%`,
      (chartArea.left + chartArea.right) / 2,
      (chartArea.top + chartArea.bottom) / 2
    );
    ctx.restore();
  }
};

new Chart(document.getElementById('battleChart'), {
  type: 'doughnut',
  data: dadosGrafico,
  options: {
    responsive: false,
    cutout: '58%',
    plugins: {
      legend: {
        labels: {
          color: corTextoGrafico,
          padding: 22,
          boxWidth: 22,
          boxHeight: 22,
          font: {
            size: 18,
            weight: 'bold'
          }
        }
      },
      tooltip: {
        callbacks: {
          label(context) {
            return `${context.label}: ${context.raw} partidas`;
          }
        }
      }
    }
  },
  plugins: [textoWinrate]
});
