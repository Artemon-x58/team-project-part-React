import {
  Container,
  Title,
  Wrapper,
  IllustrationImg,
} from './Recommented.styled';
import IllustrationSrc from '../../img/Ketogenic-diet.png';
const Recommented = () => {
  return (
    <Container>
      <Title>Recommented food</Title>
      <Wrapper>
        <IllustrationImg src={IllustrationSrc} alt="illustration" />
      </Wrapper>
    </Container>
  );
};

export default Recommented;
