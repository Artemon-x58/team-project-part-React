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
  BusketIcon,
} from './Water.styled';
import AddWaterModal from 'components/AddWaterModal/AddWaterModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRecommendedWater,
  selectWaterToday,
} from '../../redux/statistics/statisticsSelectors';
import {
  addWaterIntake,
  removeWaterIntake,
} from 'redux/statistics/statisticsOperations';

import Icons from '../../icons/icons.svg';

const Water = () => {
  const recomendedWaters = useSelector(selectRecommendedWater);
  const { water: consumedWaters } = useSelector(selectWaterToday);
  const dispatch = useDispatch();

  const percentage = Number.isNaN((consumedWaters / recomendedWaters) * 100)
    ? 0
    : (consumedWaters / recomendedWaters) * 100;

  const remainingWaters = Math.max(0, recomendedWaters - consumedWaters);

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
                {consumedWaters} <Unit>ml</Unit>
              </Value>
              <Left>
                left: <Unit>{remainingWaters} ml</Unit>
              </Left>
            </ValueWrapper>
            <AddWaterModal
              addWater={handleAddWater}
              dailyGoal={recomendedWaters}
              consumedWater={consumedWaters}
            />
          </WaterInfoWrapper>

          <BusketIcon onClick={() => dispatch(removeWaterIntake())}>
            <use xlinkHref={`${Icons}#icon-basket`} />
          </BusketIcon>
        </WaterInfo>
      </Body>
    </Main>
  );
};

export default Water;
