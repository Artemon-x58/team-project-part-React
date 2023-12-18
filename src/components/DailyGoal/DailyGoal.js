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

const DailyGoal = () => {
  return (
    <Main>
      <Title>Daily goal</Title>
      <Body>
        <Wrapper first="true">
          <svg height={80} width={80}>
            <use href={`${linkIconsSprite}#icon-calories-bubble`} />
          </svg>
          <div>
            <Subtitle>Calories</Subtitle>
            <Value>1700</Value>
          </div>
        </Wrapper>
        <Wrapper>
          <svg height={80} width={80}>
            <use href={`${linkIconsSprite}#icon-bottle-of-water`} />
          </svg>
          <div>
            <Subtitle>Water</Subtitle>
            <Value>
              1500 <Unit>ml</Unit>
            </Value>
          </div>
        </Wrapper>
      </Body>
    </Main>
  );
};

export default DailyGoal;
