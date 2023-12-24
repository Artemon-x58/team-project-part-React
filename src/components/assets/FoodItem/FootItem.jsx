import {
  Container,
  Img,
  Title,
  Wrapper,
  Text,
  TextGrey,
} from './FoodItem.styled';
const FoodItem = ({ img, title, weight, calories }) => {
  return (
    <Container>
      <Img src={img} alt={title} />
      <Wrapper>
        <Title>{title}</Title>
        <Text>
          {weight}
          <TextGrey> {calories} calories</TextGrey>
        </Text>
      </Wrapper>
    </Container>
  );
};

export default FoodItem;
