import { Container } from 'components/Container/Container.styled';
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
} from './DiaryPart.styled';
import { useState } from 'react';
import { RecordDiaryModal } from 'components/RecordDiaryModal/RecordDiaryModal';

const recordedValues = {
  breakfast: true,
  lunch: true,
  dinner: true,
  snack: false,
};
export const DiaryPart = () => {
  const [isRecorded, setIsRecorded] = useState(recordedValues);
  const [isOpen, setOpen] = useState(false);
  const [mealName, setMealName] = useState('');
  const handleOpen = partMeal => () => {
    setOpen(true);
    setMealName(partMeal);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container>
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
                Carbonohidrates: <MealValue>20</MealValue>
              </MealContain>
              <MealContain>
                Protein: <MealValue>20</MealValue>
              </MealContain>
              <MealContain>
                Fat: <MealValue>20</MealValue>
              </MealContain>
              {/*TODO: Change to one li after adding Contain base*/}
              <svg width="20px" height="20px">
                <use xlinkHref={`${Icons}#icon-basket`} />
              </svg>
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
                Carbonohidrates: <MealValue>20</MealValue>
              </MealContain>
              <MealContain>
                Protein: <MealValue>20</MealValue>
              </MealContain>
              <MealContain>
                Fat: <MealValue>20</MealValue>
              </MealContain>
              {/*TODO: Change to one li after adding Contain base*/}
              <svg width="20px" height="20px">
                <use xlinkHref={`${Icons}#icon-basket`} />
              </svg>
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
                Carbonohidrates: <MealValue>20</MealValue>
              </MealContain>
              <MealContain>
                Protein: <MealValue>20</MealValue>
              </MealContain>
              <MealContain>
                Fat: <MealValue>20</MealValue>
              </MealContain>
              {/*TODO: Change to one li after adding Contain base*/}
              <svg width="20px" height="20px">
                <use xlinkHref={`${Icons}#icon-basket`} />
              </svg>
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
                Carbonohidrates: <MealValue>20</MealValue>
              </MealContain>
              <MealContain>
                Protein: <MealValue>20</MealValue>
              </MealContain>
              <MealContain>
                Fat: <MealValue>20</MealValue>
              </MealContain>
              {/*TODO: Change to one li after adding Contain base*/}
              <svg width="20px" height="20px">
                <use xlinkHref={`${Icons}#icon-basket`} />
              </svg>
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
    </Container>
  );
};
