import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartForCarbohydrates = () => {
  const goal = 170;
  const consumed = 80;
  const leftConsumed = goal - consumed;
  const consumedPercent = Math.floor((consumed * 100) / goal);

  const warning = consumed > goal;

  const data = {
    datasets: [
      {
        data: [consumed, leftConsumed >= 0 ? leftConsumed : 0],
        backgroundColor: [`${warning ? '#FF3522' : '#FFC4F7'}`, '#292928'],
        borderRadius: `${leftConsumed > 0 ? 15 : 0}`,
        borderWidth: 0,
        cutout: '80%',
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  };

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx } = chart;
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;

      ctx.save();
      ctx.font = `400 12px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#B6B6B6';
      ctx.fillText(consumedPercent + '%', xCoor, yCoor);
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

export default ChartForCarbohydrates;
