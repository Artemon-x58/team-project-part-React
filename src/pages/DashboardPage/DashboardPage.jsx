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

const DashboardPage = () => {

  return (
    <Container>
      <DashboardSection>
        <LineChartBlock>
          <ChartGrid>
            <GraphForCalories dataFormat={2023} type={'calories'} />
          </ChartGrid>
          <ChartGrid>
            <GraphForWater dataFormat={2023} type={'water'} />
          </ChartGrid>
        </LineChartBlock>
        <ScaleChartBlock>
          <GraphForWeight dataFormat={2023} />
        </ScaleChartBlock>
      </DashboardSection>
    </Container>
  );
};

export default DashboardPage;
