import { Container } from 'components/Container/Container.styled';
import DailyGoal from 'components/DailyGoal';
import { DiaryPart } from 'components/DiaryPart/DiaryPart';
import Food from 'components/Food';
import Water from 'components/Water';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllStatistics } from 'redux/statistics/statisticsOperations';
import { InfoWrapper, StyledLink, Topic, Wrapper } from './MainPage.styled';

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllStatistics());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Wrapper>
          <Topic>Today</Topic>
          <StyledLink>On the way to the goal</StyledLink>
        </Wrapper>
        <InfoWrapper>
          <DailyGoal />
          <Water />
          <Food />
        </InfoWrapper>

        <div>
          <DiaryPart />
        </div>
      </Container>
    </>
  );
};
