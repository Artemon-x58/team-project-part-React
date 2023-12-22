import Icons from '../../icons/icons.svg';
import { Container } from 'components/Container/Container.styled';
import Meals from '../../icons/meals.svg';
import {
  DishName,
  DishStat,
  DishValue,
  EditWrap,
  ListWrap,
  MealContain,
  MealContainList,
  MealItem,
  MealList,
  MealName,
  MealWrap,
  Number,
  Title,
  TitleWrap,
  WrapMealName,
  MealValue,
  EditText,
  Dish,
  StatWrap,
  MealRecordWrap,
} from './Diary.styled';
import { useState } from 'react';
const initialValues = {
  1: true,
  2: false,
  3: false,
  4: false,
};
export const Diary = () => {
  const [isDish, setDish] = useState(initialValues);
  return (
    <Container>
      <TitleWrap>
        <svg width="16px" height="16px">
          <use xlinkHref={`${Icons}#icon-arrow-right`} />
        </svg>
        <Title>Diary</Title>
      </TitleWrap>
      <MealWrap>
        <WrapMealName>
          <svg width="36px" height="36px">
            <use xlinkHref={`${Meals}#icon-breakfast`} />
          </svg>

          <MealName>Breakfast</MealName>
        </WrapMealName>
        <MealContainList>
          <MealContain>Carbonohidrates:</MealContain>
          <MealValue>20</MealValue>
          <MealContain>Protein:</MealContain>
          <MealValue>20</MealValue>
          <MealContain>Fat:</MealContain>
          <MealValue>20</MealValue>
        </MealContainList>

        <ListWrap>
          <MealList>
            <MealItem>
              <Number>1</Number>
              {isDish[1] ? (
                <Dish>
                  <DishName>English breakfast</DishName>
                  <EditWrap>
                    <svg width="16px" height="16px">
                      <use xlinkHref={`${Icons}#icon-edit`} />
                    </svg>
                    <EditText>Edit</EditText>
                  </EditWrap>
                  <StatWrap>
                    <DishStat>Carb.</DishStat>
                    <DishValue>20</DishValue>
                    <DishStat>Prot.</DishStat>
                    <DishValue>20</DishValue>
                    <DishStat>Fat.</DishStat>
                    <DishValue>20</DishValue>
                  </StatWrap>
                </Dish>
              ) : (
                <MealRecordWrap>
                  <svg width="16px" height="16px">
                    <use xlinkHref={`${Icons}#icon-add`} />
                  </svg>
                  Record your meal
                </MealRecordWrap>
              )}
            </MealItem>
            <MealItem>
              <Number>1</Number>
              {isDish[2] ? (
                <Dish>
                  <DishName>English breakfast</DishName>
                  <EditWrap>
                    <svg width="16px" height="16px">
                      <use xlinkHref={`${Icons}#icon-edit`} />
                    </svg>
                    <EditText>Edit</EditText>
                  </EditWrap>
                  <StatWrap>
                    <DishStat>Carb.</DishStat>
                    <DishValue>20</DishValue>
                    <DishStat>Prot.</DishStat>
                    <DishValue>20</DishValue>
                    <DishStat>Fat.</DishStat>
                    <DishValue>20</DishValue>
                  </StatWrap>
                </Dish>
              ) : (
                <MealRecordWrap>
                  <svg width="16px" height="16px">
                    <use xlinkHref={`${Icons}#icon-add`} />
                  </svg>
                  Record your meal
                </MealRecordWrap>
              )}
            </MealItem>
          </MealList>
        </ListWrap>
      </MealWrap>
    </Container>
  );
};
