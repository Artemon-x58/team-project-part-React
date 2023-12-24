import GraphForCalories from 'components/Charts/GraphForCalories';
import GraphForWater from 'components/Charts/GraphForWater';
import GraphForWeight from 'components/Charts/GraphForWeight';
import { Container } from 'components/Container/Container.styled';

import {
  DashboardSection,
  LineChartBlock,
  ChartGrid,
  ScaleChartBlock,
} from './DashboardPage.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchAllValues } from 'redux/graphs/graphsOperations';
import { averageValueCalories, averageValueWater } from 'redux/graphs/graphsSelectors';
import { GraphsSubtitle, GraphsTitle, TitleContainer } from 'components/Charts/Graphs.Styled';

const DashboardPage = () => {
  const [period, setPeriod] = useState('december');
  
  // const title = 'december';
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllValues(period));
  }, [dispatch, period])



  const handleChangeMonth = (value) => {
    setPeriod(value);
    // onChange
  }

   const calories = useSelector(averageValueCalories);
   console.log(calories);

  return (
    // <Container>
    // <DashboardSection>
    <>
      <LineChartBlock>
        <div>
          <TitleContainer>
            <GraphsTitle>{'Calories'}</GraphsTitle>
            <GraphsSubtitle>
              Average value: <span>{`${calories} cal`}</span>
            </GraphsSubtitle>
          </TitleContainer>
          <ChartGrid>
            <GraphForCalories dataFormat={2023} type={'calories'} />
          </ChartGrid>
        </div>
        <ChartGrid>
          <GraphForWater dataFormat={2023} type={'water'} />
        </ChartGrid>
      </LineChartBlock>
      <ScaleChartBlock>
        <GraphForWeight dataFormat={2023} />
      </ScaleChartBlock>
    </>
    // </DashboardSection>
    // </Container>
  );
};

export default DashboardPage;
