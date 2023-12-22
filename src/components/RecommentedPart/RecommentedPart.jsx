import FoodItem from 'components/FoodItem/FootItem';
import { Container, Title, List, Btn } from './Recommented.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectRecommendedFood } from 'redux/statistics/statisticsSelectors';
import { useEffect } from 'react';
import { fetchAllDiaries } from 'redux/diary/diaryOperations';

const RecommentedPart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllDiaries());
  }, [dispatch]);
  const recommendedList = useSelector(selectRecommendedFood);
  const FoodCollections = recommendedList.map(item => {
    return (
      <FoodItem
        key={item.name}
        img={item.img}
        title={item.name}
        weight={item.amount}
        calories={item.calories}
      />
    );
  });
  return (
    <Container>
      <Title>Recommented food</Title>
      <List> {FoodCollections}</List>
      <Btn>See more →</Btn>
    </Container>
  );
};

export default RecommentedPart;
