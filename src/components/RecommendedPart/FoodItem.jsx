import {
  Container,
  Img,
  Title,
  Wrapper,
  Text,
} from './FoodItem.styled';

const FoodItem = ({ img, title, weight, calories }) => {
  return (
    <Container>
      <Img src={img} alt={title} />
      <Wrapper>
        <Title>{title}</Title>
        <Text>
          {weight}
          <span> {calories} calories</span>
        </Text>
      </Wrapper>
    </Container>
  );
};

export default FoodItem;
