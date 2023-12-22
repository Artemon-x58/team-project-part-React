import { Container, Title, List, Btn } from './Recommented.styled';
import FoodItem from 'components/assets/FoodItem/FootItem';
import store from './store';

const RecommentedPart = () => {
  const FoodCollections = store.map(item => {
    return (
      <FoodItem
        key={item.title}
        img={item.img}
        title={item.title}
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
