import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartForCalories = ({ calories, consumedCalories }) => {
  const goal = calories || 0;
  const consumed = consumedCalories || 0;
  const leftConsumed = goal - consumed;

  const warning = consumed > goal;

  const data = {
    labels: ['Consumed:', 'Left:'],
    datasets: [
      {
        data: [consumed, leftConsumed >= 0 ? leftConsumed : 0],
        backgroundColor: [`${warning ? '#FF3522' : '#45FFBC'}`, '#292928'],
        borderColor: ['rgba(69, 255, 188, 0)'],
        borderRadius: `${leftConsumed > 0 ? 15 : 0}`,
        borderWidth: 0,
        cutout: '80%',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;

      ctx.save();
      ctx.font = `500 32px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = `${warning ? '#E74A3B' : '#FFFFFF'}`;
      ctx.fillText(data.datasets[0].data[0], xCoor, yCoor - 5);

      ctx.font = `400 14px sans-serif`;
      ctx.fillStyle = '#B6B6B6';
      ctx.fillText('caliories', xCoor, yCoor + 20);
    },
  };

  const backgroundCircle = {
    id: 'backgroundCircle',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
      const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
      const width = outerRadius - innerRadius;
      const angle = Math.PI / 180;

      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.strokeStyle = 'rgba(41, 41, 40, 1)';
      ctx.arc(xCoor, yCoor, outerRadius - width / 2, 0, angle * 360, false);
      ctx.stroke();
    },
  };

  return (
    <>
      <Doughnut
        data={data}
        options={options}
        plugins={[textCenter, backgroundCircle]}
      />
    </>
  );
};

export default ChartForCalories;
