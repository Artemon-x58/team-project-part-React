import { Container, Title, Wrapper, IllustrationImg } from './Food.styled';
import IllustrationSrc from '../../img/Ketogenic-diet.png';
const FoodPage = () => {
  return (
    <Container>
      <Title>Recommented food</Title>
      <Wrapper>
        <IllustrationImg src={IllustrationSrc} alt="illustration" />
      </Wrapper>
    </Container>
  );
};

export default FoodPage;
