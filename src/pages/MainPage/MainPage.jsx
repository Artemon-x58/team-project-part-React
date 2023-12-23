import { Container } from 'components/Container/Container.styled';
import DailyGoal from 'components/DailyGoal';
import { DiaryPart } from 'components/Diary/DiaryPart';
import Food from 'components/Food';
import Water from 'components/Water';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllStatistics } from 'redux/statistics/statisticsOperations';
import {
  FoodWrapepr,
  InfoWrapper,
  StyledLink,
  Topic,
  Wrapper,
} from './MainPage.styled';
import RecommentedPart from 'components/RecommentedPart/RecommentedPart';

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllStatistics());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        <Topic>Today</Topic>
        <StyledLink>On the way to the goal</StyledLink>
      </Wrapper>
      <InfoWrapper>
        <DailyGoal />
        <Water />
        <Food />
      </InfoWrapper>

      <FoodWrapepr>
        <DiaryPart />
        <RecommentedPart />
      </FoodWrapepr>
    </>
  );
};
