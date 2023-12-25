import DailyGoal from 'components/DailyGoal';
import { DiaryPart } from 'components/DiaryPart/DiaryPart';
import Food from 'components/Food';
import Water from 'components/Water';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllStatistics } from 'redux/statistics/statisticsOperations';
import {
  ConteinerRecommended,
  FoodWrapepr,
  InfoWrapper,
  StyledLink,
  Topic,
  Wrapper,
} from './MainPage.styled';
import RecommentedPart from 'components/RecommentedPart/RecommentedPart';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllStatistics());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        <Topic>Today</Topic>
        <StyledLink onClick={() => navigate('/graphs')}>
          On the way to the goal
        </StyledLink>
      </Wrapper>
      <InfoWrapper>
        <ConteinerRecommended>
          <DailyGoal />
          <Water />
        </ConteinerRecommended>
        <Food />
      </InfoWrapper>

      <FoodWrapepr>
        <DiaryPart />
        <RecommentedPart />
      </FoodWrapepr>
    </>
  );
};
