import {
  PercentageContainer,
  PercentageFill,
  PercentageText,
  WaterInfo,
  Main,
  Title,
  Body,
  WaterInfoWrapper,
  Subtitle,
  Unit,
  Value,
  Left,
  ValueWrapper,
} from './Water.styled';
import AddWaterModal from 'components/AddWaterModal/AddWaterModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRecommendedWater,
  selectWaterToday,
} from 'redux/statistics/statisticsSelectors';
import { addWaterIntake } from 'redux/statistics/statisticsOperations';

const Water = () => {
  const recomendedWater = useSelector(selectRecommendedWater);
  const { water: consumedWater } = useSelector(selectWaterToday);
  const dispatch = useDispatch();

  const percentage = Number.isNaN((consumedWater / recomendedWater) * 100)
    ? 0
    : (consumedWater / recomendedWater) * 100;

  const remainingWater = Math.max(0, recomendedWater - consumedWater);

  const handleAddWater = amount => {
    dispatch(addWaterIntake(amount));
  };

  return (
    <Main>
      <Title>Water</Title>
      <Body>
        <WaterInfo>
          <PercentageContainer>
            <PercentageFill percentage={percentage}></PercentageFill>
            <PercentageText>{`${percentage.toFixed(0)}%`}</PercentageText>
          </PercentageContainer>
          <WaterInfoWrapper>
            <Subtitle>Water Consumption</Subtitle>
            <ValueWrapper>
              <Value>
                {consumedWater} <Unit>ml</Unit>
              </Value>
              <Left>
                left: <Unit>{remainingWater} ml</Unit>
              </Left>
            </ValueWrapper>
            <AddWaterModal
              addWater={handleAddWater}
              dailyGoal={recomendedWater}
              consumedWater={consumedWater}
            />
          </WaterInfoWrapper>
        </WaterInfo>
      </Body>
    </Main>
  );
};

export default Water;
