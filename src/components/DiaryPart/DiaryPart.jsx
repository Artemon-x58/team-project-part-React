import Snack from '../../img/snack.png';
import Dinner from '../../img/dinner.png';
import Lunch from '../../img/lunch.png';
import Breakfast from '../../img/breakfast.png';
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
import {
  addFoodIntake,
  removeFoodIntake,
} from 'redux/statistics/statisticsOperations';

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
          <MoreLink to="/diary">See more</MoreLink>
        </TitleWrap>

        <WrapMeal $ismealrecorded={isRecorded.breakfast.toString()}>
          <WrapMealName>
            <img src={Breakfast} alt={'breakfast'} width="36px" height="36px" />
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
              <svg width="16px" height="16px" stroke="#E3FFA8">
                <use xlinkHref={`${Icons}#icon-add`} />
              </svg>
              Record your meal
            </MealRecordWrap>
          )}
        </WrapMeal>
        <WrapMeal $ismealrecorded={isRecorded.lunch.toString()}>
          <WrapMealName>
            <img src={Lunch} alt={'lunch'} width="36px" height="36px" />

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
              <svg width="16px" height="16px" stroke="#E3FFA8">
                <use xlinkHref={`${Icons}#icon-add`} />
              </svg>
              Record your meal
            </MealRecordWrap>
          )}
        </WrapMeal>
        <WrapMeal $ismealrecorded={isRecorded.dinner.toString()}>
          <WrapMealName>
            <img src={Dinner} alt={'dinner'} width="36px" height="36px" />

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
              <svg width="16px" height="16px" stroke="#E3FFA8">
                <use xlinkHref={`${Icons}#icon-add`} />
              </svg>
              Record your meal
            </MealRecordWrap>
          )}
        </WrapMeal>
        <WrapMeal $ismealrecorded={isRecorded.snack.toString()}>
          <WrapMealName>
            <img src={Snack} alt={'snack'} width="36px" height="36px" />

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
              <BasketIcon onClick={() => dispatch(removeFoodIntake('snack'))}>
                <use xlinkHref={`${Icons}#icon-basket`} />
              </BasketIcon>
            </MealContainList>
          ) : (
            <MealRecordWrap onClick={handleOpen('snack')}>
              <svg width="16px" height="16px" stroke="#E3FFA8">
                <use xlinkHref={`${Icons}#icon-add`} />
              </svg>
              Record your meal
            </MealRecordWrap>
          )}
        </WrapMeal>
      </DiaryWrapper>
      {isOpen && (
        <RecordDiaryModal
          adddiary={addFoodIntake}
          handleClose={handleClose}
          open={isOpen}
          mealName={mealName}
          length={0}
        />
      )}
    </>
  );
};
