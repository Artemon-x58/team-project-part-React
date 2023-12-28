import { useSelector } from 'react-redux';
import { waterPerThisMonth } from 'redux/graphs/graphsSelectors';

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

import { Graph, GraphLabelBlock, GraphLabelContent } from './Graphs.Styled';
import { getDaysInMonth } from './getDaysOfMonth';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GraphForWater = ({ month, year }) => {
  const waterPerMonth = useSelector(waterPerThisMonth);
  const arrOfDate = getDaysInMonth(month, year);

  const activeDays = Array.from(
    { length: arrOfDate.length },
    (_, index) => index + 1
  );

  const resultArray = activeDays.map(day => {
    const { water } = waterPerMonth.find(data => {
      const dataDay = Number(data.date.slice(-2));
      return dataDay === day;
    }) || { water: null };

    return water;
  });

  for (let i = 1; i < resultArray.length; i++) {
    if (resultArray[i] !== null) {
      resultArray[i - 1] = 0;
      break;
    }
  }

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
          padding: 8,
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
        ticks: {
          alignToPixels: true,
          major: {
            enabled: true,
          },
          color: '#B6B6B6',
          stepSize: 1000,
          callback: value => `${value / 1000}L`,
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
    labels: arrOfDate,
    datasets: [
      {
        data: resultArray,
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
