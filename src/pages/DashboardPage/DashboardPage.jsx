import GraphForCalories from 'components/Charts/GraphForCalories';
import GraphForWater from 'components/Charts/GraphForWater';
import GraphForWeight from 'components/Charts/GraphForWeight';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchAllValues } from 'redux/graphs/graphsOperations';
import {
  averageValueCalories,
  averageValueWater,
  averageValueWeight,
} from 'redux/graphs/graphsSelectors';

import {
  DashboardSection,
  LineChartBlock,
  ChartGrid,
  ScaleChartBlock,
} from './DashboardPage.Styled';

import {
  ContainerGraph,
  GraphsSubtitle,
  GraphsTitle,
  TitleContainer,
} from 'components/Charts/Graphs.Styled';

const DashboardPage = () => {
  const [year, setYear] = useState(2023);
  const [nameMonth, setNameMonth] = useState('november');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllValues(nameMonth));
  }, [dispatch, nameMonth]);

  const handleChangeMonth = value => {
    setNameMonth(value);
    setYear(value);
  };

  const calories = useSelector(averageValueCalories);
  const water = useSelector(averageValueWater);
  const weight = useSelector(averageValueWeight);

  return (
    <DashboardSection>
      <button onClick={handleChangeMonth}></button>
      <LineChartBlock>
        <ContainerGraph>
          <TitleContainer>
            <GraphsTitle>{'Calories'}</GraphsTitle>
            <GraphsSubtitle>
              Average value: <span>{`${calories} cal`}</span>
              <button type="button" onClick={handleChangeMonth}></button>
            </GraphsSubtitle>
          </TitleContainer>
          <ChartGrid style={{ width: '100%' }}>
            <GraphForCalories month={nameMonth} year={year} type={'calories'} />
          </ChartGrid>
        </ContainerGraph>
        <ContainerGraph>
          <TitleContainer>
            <GraphsTitle>{'Water'}</GraphsTitle>
            <GraphsSubtitle>
              Average value: <span>{`${water} ml`}</span>
            </GraphsSubtitle>
          </TitleContainer>
          <ChartGrid style={{ width: '100%' }}>
            <GraphForWater month={nameMonth} year={year} type={'water'} />
          </ChartGrid>
        </ContainerGraph>
      </LineChartBlock>
      <ScaleChartBlock>
        <TitleContainer>
          <GraphsTitle>Weight</GraphsTitle>
          <GraphsSubtitle>
            Average value: <span>{`${weight} kg`}</span>
          </GraphsSubtitle>
        </TitleContainer>
        <ChartGrid>
          <GraphForWeight month={nameMonth} year={year} />
        </ChartGrid>
      </ScaleChartBlock>
    </DashboardSection>
  );
};

export default DashboardPage;
