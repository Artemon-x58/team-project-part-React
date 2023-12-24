import Meals from '../../icons/meals.svg';
import Icons from '../../icons/icons.svg';
import {
  DiaryWrapper,
  MealContain,
  MealContainList,
  MealName,
  MealRecordWrap,
  MealValue,
  MoreLink,
  Title,
  TitleWrap,
  WrapMeal,
  WrapMealName,
  BasketIcon,
} from './DiaryPart.styled';
import { useEffect, useState } from 'react';
import { RecordDiaryModal } from 'components/RecordDiaryModal/RecordDiaryModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBreakfastSumNutrientsToday,
  selectDinnerSumNutrientsToday,
  selectLunchSumNutrientsToday,
  selectSnackSumNutrientsToday,
} from 'redux/statistics/statisticsSelectors';
import { removeFoodIntake } from 'redux/statistics/statisticsOperations';

export const DiaryPart = () => {
  const [isRecorded, setIsRecorded] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
    snack: false,
  });
  const [isOpen, setOpen] = useState(false);
  const [mealName, setMealName] = useState('');
  const dispatch = useDispatch();

  const breakfastNutrients = useSelector(selectBreakfastSumNutrientsToday);
  const lunchNutrients = useSelector(selectLunchSumNutrientsToday);
  const dinnerNutrients = useSelector(selectDinnerSumNutrientsToday);
  const snackNutrients = useSelector(selectSnackSumNutrientsToday);

  useEffect(() => {
    // Визначаємо, чи є дані для кожного прийому їжі та оновлюємо значення isRecorded
    setIsRecorded({
      breakfast: Boolean(
        breakfastNutrients.carbohydrates ||
          breakfastNutrients.protein ||
          breakfastNutrients.fat
      ),
      lunch: Boolean(
        lunchNutrients.carbohydrates ||
          lunchNutrients.protein ||
          lunchNutrients.fat
      ),
      dinner: Boolean(
        dinnerNutrients.carbohydrates ||
          dinnerNutrients.protein ||
          dinnerNutrients.fat
      ),
      snack: Boolean(
        snackNutrients.carbohydrates ||
          snackNutrients.protein ||
          snackNutrients.fat
      ),
    });
  }, [breakfastNutrients, lunchNutrients, dinnerNutrients, snackNutrients]);

  const handleOpen = partMeal => () => {
    setOpen(true);
    setMealName(partMeal);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <DiaryWrapper>
        <TitleWrap>
          <Title>Diary</Title>
          <MoreLink to="">See more</MoreLink>
        </TitleWrap>

        <WrapMeal ismealrecorded={isRecorded.breakfast.toString()}>
          <WrapMealName>
            <svg width="36px" height="36px">
              <use xlinkHref={`${Meals}#icon-breakfast`} />
            </svg>
            <MealName>Breakfast</MealName>
          </WrapMealName>

          {isRecorded.breakfast ? (
            <MealContainList>
              <MealContain>
                Carbonohidrates:
                <MealValue>{breakfastNutrients.carbohydrates}</MealValue>
              </MealContain>
              <MealContain>
                Protein: <MealValue>{breakfastNutrients.protein}</MealValue>
              </MealContain>
              <MealContain>
                Fat: <MealValue>{breakfastNutrients.fat}</MealValue>
              </MealContain>
              {/*TODO: Change to one li after adding Contain base*/}
              <BasketIcon
                onClick={() => dispatch(removeFoodIntake('breakfast'))}
              >
                <use xlinkHref={`${Icons}#icon-basket`} />
              </BasketIcon>
            </MealContainList>
          ) : (
            <MealRecordWrap onClick={handleOpen('breakfast')}>
              <svg width="16px" height="16px">
                <use xlinkHref={`${Icons}#icon-add`} />
              </svg>
              Record your meal
            </MealRecordWrap>
          )}
        </WrapMeal>
        <WrapMeal ismealrecorded={isRecorded.lunch.toString()}>
          <WrapMealName>
            <svg width="36px" height="36px">
              <use xlinkHref={`${Meals}#icon-lunch`} />
            </svg>

            <MealName>Lunch</MealName>
          </WrapMealName>

          {isRecorded.lunch ? (
            <MealContainList>
              <MealContain>
                Carbonohidrates:
                <MealValue>{lunchNutrients.carbohydrates}</MealValue>
              </MealContain>
              <MealContain>
                Protein: <MealValue>{lunchNutrients.protein}</MealValue>
              </MealContain>
              <MealContain>
                Fat: <MealValue>{lunchNutrients.fat}</MealValue>
              </MealContain>
              {/*TODO: Change to one li after adding Contain base*/}
              <BasketIcon onClick={() => dispatch(removeFoodIntake('lunch'))}>
                <use xlinkHref={`${Icons}#icon-basket`} />
              </BasketIcon>
            </MealContainList>
          ) : (
            <MealRecordWrap onClick={handleOpen('lunch')}>
              <svg width="16px" height="16px">
                <use xlinkHref={`${Icons}#icon-add`} />
              </svg>
              Record your meal
            </MealRecordWrap>
          )}
        </WrapMeal>
        <WrapMeal ismealrecorded={isRecorded.dinner.toString()}>
          <WrapMealName>
            <svg width="36px" height="36px">
              <use xlinkHref={`${Meals}#icon-dinner`} />
            </svg>

            <MealName>Dinner</MealName>
          </WrapMealName>

          {isRecorded.dinner ? (
            <MealContainList>
              <MealContain>
                Carbonohidrates:{' '}
                <MealValue>{dinnerNutrients.carbohydrates}</MealValue>
              </MealContain>
              <MealContain>
                Protein: <MealValue>{dinnerNutrients.protein}</MealValue>
              </MealContain>
              <MealContain>
                Fat: <MealValue>{dinnerNutrients.fat}</MealValue>
              </MealContain>
              {/*TODO: Change to one li after adding Contain base*/}
              <BasketIcon onClick={() => dispatch(removeFoodIntake('dinner'))}>
                <use xlinkHref={`${Icons}#icon-basket`} />
              </BasketIcon>
            </MealContainList>
          ) : (
            <MealRecordWrap onClick={handleOpen('dinner')}>
              <svg width="16px" height="16px">
                <use xlinkHref={`${Icons}#icon-add`} />
              </svg>
              Record your meal
            </MealRecordWrap>
          )}
        </WrapMeal>
        <WrapMeal ismealrecorded={isRecorded.snack.toString()}>
          <WrapMealName>
            <svg width="36px" height="36px">
              <use xlinkHref={`${Meals}#icon-snack`} />
            </svg>

            <MealName>Snack</MealName>
          </WrapMealName>
          {isRecorded.snack ? (
            <MealContainList>
              <MealContain>
                Carbonohidrates:{' '}
                <MealValue>{snackNutrients.carbohydrates}</MealValue>
              </MealContain>
              <MealContain>
                Protein: <MealValue>{snackNutrients.protein}</MealValue>
              </MealContain>
              <MealContain>
                Fat: <MealValue>{snackNutrients.fat}</MealValue>
              </MealContain>
              {/*TODO: Change to one li after adding Contain base*/}
              <BasketIcon onClick={() => dispatch(removeFoodIntake('snack'))}>
                <use xlinkHref={`${Icons}#icon-basket`} />
              </BasketIcon>
            </MealContainList>
          ) : (
            <MealRecordWrap onClick={handleOpen('snack')}>
              <svg width="16px" height="16px">
                <use xlinkHref={`${Icons}#icon-add`} />
              </svg>
              Record your meal
            </MealRecordWrap>
          )}
        </WrapMeal>
      </DiaryWrapper>
      <RecordDiaryModal
        handleClose={handleClose}
        open={isOpen}
        mealName={mealName}
      />
    </>
  );
};
