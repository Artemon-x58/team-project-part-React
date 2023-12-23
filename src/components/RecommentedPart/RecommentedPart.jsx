import FoodItem from 'components/FoodItem/FootItem';
import { Container, Title, List, Btn } from './Recommented.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectRecommendedFood } from 'redux/statistics/statisticsSelectors';
import { useEffect } from 'react';
import {
  addDiaries,
  deleteDiaresById,
  fetchAllDiaries,
} from 'redux/diary/diaryOperations';

const RecommentedPart = () => {
  const name = 'snack';
  const lunch = [
    {
      title: 'mango',
      calories: 1000.1,
      carbohydrates: 800.2,
      protein: 150.2,
      fat: 50.12,
    },
    {
      title: 'beef',
      calories: 1000,
      carbohydrates: 800,
      protein: 150,
      fat: 50,
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllDiaries());
  }, [dispatch]);
  const addDiares = () => {
    dispatch(addDiaries({ title: name, array: lunch }));
  };

  const deleteDiariesById = () => {
    dispatch(deleteDiaresById());
  };
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
      <button type="submit" onClick={addDiares}>
        ADD DIARY
      </button>
      <button type="submit" onClick={deleteDiariesById}>
        DELETE DIARIES BY ID
      </button>
      <Title>Recommented food</Title>
      <List> {FoodCollections}</List>
      <Btn>See more →</Btn>
    </Container>
  );
};

export default RecommentedPart;
