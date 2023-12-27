import { useSelector } from 'react-redux';
import { selectRecommendedFood } from 'redux/statistics/statisticsSelectors';
import { useNavigate } from 'react-router-dom';

import FoodItem from 'components/RecommendedPart/FoodItem';
import Icon from '../../icons/icons.svg';
import {
  Container,
  Title,
  List,
  StyledLink,
  WraperLink,
  SvgRight,
} from './RecommendedPart.styled';

const RecommentedPart = () => {
  const navigate = useNavigate();
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
      <Title>Recommended food</Title>
      <List> {FoodCollections}</List>
      <WraperLink onClick={() => navigate('/recommended-food')}>
        <StyledLink>See more</StyledLink>
        <SvgRight>
          <use xlinkHref={`${Icon}#icon-arrow-right`} />
        </SvgRight>
      </WraperLink>
    </Container>
  );
};

export default RecommentedPart;
