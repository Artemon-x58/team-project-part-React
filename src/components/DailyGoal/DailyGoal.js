import { useSelector } from 'react-redux';
import linkIconsSprite from '../../icons/icons.svg';

import {
  Wrapper,
  Subtitle,
  Value,
  Main,
  Body,
  Title,
  Unit,
} from './DailyGoal.styled';
import {
  selectRecommendedCalories,
  selectRecommendedWater,
} from 'redux/statistics/statisticsSelectors';

const DailyGoal = () => {
  const recommendedWater = useSelector(selectRecommendedWater);
  const recommendedCalories = useSelector(selectRecommendedCalories);

  return (
    <Main>
      <Title>Daily goal</Title>
      <Body>
        <Wrapper $first="true">
          <svg height={80} width={80}>
            <use href={`${linkIconsSprite}#icon-calories-bubble`} />
          </svg>
          <div>
            <Subtitle>Calories</Subtitle>
            <Value>
              {recommendedCalories.calories}
              <Unit>ml</Unit>
            </Value>
          </div>
        </Wrapper>
        <Wrapper>
          <svg height={80} width={80}>
            <use href={`${linkIconsSprite}#icon-bottle-of-water`} />
          </svg>
          <div>
            <Subtitle>Water</Subtitle>
            <Value>
              {recommendedWater} <Unit>ml</Unit>
            </Value>
          </div>
        </Wrapper>
      </Body>
    </Main>
  );
};

export default DailyGoal;
