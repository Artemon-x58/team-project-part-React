import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

import {
  TitleContainer,
  GraphsTitle,
  GraphsSubtitle,
  GraphsCaption,
  Graph,
  GraphLabelBlock,
  GraphLabelContent,
} from './Graphs.Styled';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GraphForWater = () => {
  const options = {
    interaction: {
      mode: 'index',
      intersect: false,
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
        position: 'nearest',
        external: context => {
          const { chart, tooltip } = context;
          let tooltipEl = chart.canvas.parentNode.querySelector('div');
          let tooltipTitle = chart.canvas.parentNode.querySelector('#value');

          if (tooltip.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
          }

          const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

          tooltipEl.style.opacity = 1;
          tooltipEl.style.left = positionX + tooltip.caretX + 'px';
          tooltipEl.style.top = positionY + tooltip.caretY - '84' + 'px';
          tooltipTitle.textContent =
            context.tooltip.dataPoints[0].formattedValue;
        },
      },
    },
    indexAxis: 'x',
    scales: {
      x: {
        alignToPixels: true,
        beginAtZero: false,
        offset: true,
        ticks: {
          color: '#B6B6B6',
          padding: 6,
          font: {
            family: 'Poppins',
            size: 10,
          },
        },
        grid: {
          display: true,
          color: '#292928',
          offset: true,
        },
      },
      y: {
        alignToPixels: true,
        beginAtZero: true,
        min: 0,
        max: 3000,
        // yScaleMax,
        ticks: {
          alignToPixels: true,
          major: {
            enabled: true,
          },
          color: '#B6B6B6',
          stepSize: 1000,
          callback: value => `${value / 1000} K`,
          padding: 6,
          font: {
            family: 'Poppins',
            size: 10,
          },
        },
        border: {
          display: true,
        },
        grid: {
          display: true,
          color: '#292928',
        },
      },
    },
  };

  const data = {
    labels: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ], // arrOfDay,
    datasets: [
      {
        data: [
          2000, 2000, 2000, 1900, 2000, 2000, 2000, 1900, 2000, 2000, 1900,
          2000, 1650, 1700, 2200, 1900, 1700, 1803, 1900, 2000, 2000, 2000,
          2000, 1900, 1700, 1700, 1850, 2000, 2000, 2000, 2000,
        ], // ArrOfCal,
        borderColor: '#E3FFA8',
        borderWidth: 1,
        pointRadius: 0,
        pointHoverBackgroundColor: '#E3FFA8',
        hitRadius: 5,
        pointHoverRadius: 5,
        tension: 0.4,
        drawActiveElementsOnTop: true,
      },
    ],
  };

  return (
    <>
      <TitleContainer>
        <GraphsTitle>{'Water'}</GraphsTitle>
        <GraphsSubtitle>
          Average value: <GraphsCaption>{1700 + ' ml'}</GraphsCaption>
        </GraphsSubtitle>
      </TitleContainer>
      <Graph>
        <Line data={data} options={options} />
        <GraphLabelBlock>
          <GraphLabelContent>
            <p id="value"></p>
            <span>{'mililiters'}</span>
          </GraphLabelContent>
        </GraphLabelBlock>
      </Graph>
    </>
  );
};

export default GraphForWater;
