import { useSelector } from 'react-redux';
import { selectRecommendedFood } from 'redux/statistics/statisticsSelectors';

import FoodItem from 'components/assets/FoodItem/FootItem';
import { Container, Title, List, StyledLink } from './Recommented.styled';

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
      <StyledLink to="/recommended-food">See more →</StyledLink>
    </Container>
  );
};

export default RecommentedPart;
