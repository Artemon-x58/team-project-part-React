import {
  Container,
  Title,
  Wrapper,
  IllustrationImg,
  List,
} from './Recommented.styled';
import IllustrationSrc from '../../img/Ketogenic-diet.png';
import store from './store';
import FoodItem from 'components/assets/FoodItem/FootItem';
const Recommented = () => {
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
      <Wrapper>
        <IllustrationImg src={IllustrationSrc} alt="illustration" />
        <List>{FoodCollections}</List>
      </Wrapper>
    </Container>
  );
};

export default Recommented;
