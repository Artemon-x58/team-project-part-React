import {
  Container,
  Title,
  Wrapper,
  IllustrationImg,
  List,
} from './Recommented.styled';
import IllustrationSrc from '../../img/Ketogenic-diet.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllRecommendedProduct } from 'redux/recommendedFood/recommendedOperations';
import { selectDatarecommended } from 'redux/recommendedFood/recommendedSelectors';
import FoodItem from 'components/FoodItem/FootItem';
/*import RecommentedPart from 'components/RecommentedPart/RecommentedPart';*/
const Recommented = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRecommendedProduct());
  }, [dispatch]);
  const recommendedList = useSelector(selectDatarecommended);

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
  // return <RecommentedPart />;
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
