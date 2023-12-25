import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartForCarbohydrates = ({ carbohydrates, consumedCarbohydrates }) => {
  const [consumedPercent, setConsumedPercent] = useState(0);
  const [goal, setGoal] = useState(0);
  const [consumed, setConsumed] = useState(0);
  const [dataReady, setDataReady] = useState(false);

  useEffect(() => {
    const goalValue = Number(carbohydrates);
    const consumedValue = Number(consumedCarbohydrates);

    if (!isNaN(goalValue) && !isNaN(consumedValue)) {
      const percent = Math.floor((consumedValue * 100) / goalValue);
      setConsumedPercent(percent);
      setGoal(goalValue);
      setConsumed(consumedValue);
      setDataReady(true);
    }
  }, [carbohydrates, consumedCarbohydrates]);

  if (!dataReady) {
    return null;
  }

  const data = {
    datasets: [
      {
        data: [consumed, Math.max(goal - consumed, 0)],
        backgroundColor: [consumed > goal ? '#FF3522' : '#FFC4F7', '#292928'],
        borderRadius: consumed > goal ? 15 : 0,
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
    beforeDraw(chart) {
      const { ctx } = chart;
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      ctx.save();
      ctx.font = `400 12px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#B6B6B6';
      ctx.fillText(consumedPercent + '%', xCoor, yCoor);
      ctx.restore();
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
    <Doughnut
      data={data}
      options={options}
      plugins={[textCenter, backgroundCircle]}
    />
  );
};

export default ChartForCarbohydrates;
