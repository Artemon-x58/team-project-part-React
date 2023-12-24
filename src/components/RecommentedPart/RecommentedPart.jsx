import { Container, Title, List, Btn } from './Recommented.styled';
import FoodItem from 'components/assets/FoodItem/FootItem';
import { useSelector } from 'react-redux';
import { selectRecommendedFood } from 'redux/statistics/statisticsSelectors';

const RecommentedPart = () => {
  const recommendedList = useSelector(selectRecommendedFood);
  const FoodCollections = recommendedList.map(item => {
    return (
      <FoodItem
        key={item.name}
        img={item.img}
        title={item.name}
        weight={item.weight}
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
