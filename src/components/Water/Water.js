import { useState } from 'react';
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

const Water = () => {
  const [dailyGoal, ,] = useState(2000);
  const [consumedWater, setConsumedWater] = useState(0);

  const percentage = (consumedWater / dailyGoal) * 100;
  const remainingWater = Math.max(0, dailyGoal - consumedWater);

  const handleAddWater = amount => {
    setConsumedWater(consumedWater + parseInt(amount, 10));
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
            <AddWaterModal addWater={handleAddWater} />
          </WaterInfoWrapper>
        </WaterInfo>
      </Body>
    </Main>
  );
};

export default Water;
