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
  HeightContainer,
  ArrowBack,
  WrapNameValue,
  Wrap,
  BigWrap,
  Space,
  DishNameEdit,
  DishStatEdit,
  DishValueEdit,
  Circle,
  CircleG,
  CircleR,
} from './Diary.styled';
import { useState } from 'react';

const initialValues = {
  1: true,
  2: true,
  3: false,
  4: false,
};
const initialValue = {
  name: '',
  carb: '',
  prot: '',
  fat: '',
};
const mealPart = ['breakfast', 'lunch', 'dinner', 'snack'];

export const Diary = () => {
  const [isDish, setDish] = useState(initialValues);
  const [editMode, setEditMode] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const [dishName, setDishName] = useState('English breakfast');
  const [dishValueCarbonoh, setDishValueCarbonoh] = useState(20);
  const [dishValueProt, setDishValueProt] = useState(20);
  const [dishValueFat, setDishValueFat] = useState(20);
  const [saveDish, setSaveDish] = useState(initialValue);
  const capitalizeFirstLetter = word => {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  };

  const handleEdit = number => {
    setEditMode({ ...editMode, [number]: true });
    setSaveDish(prevSaveDish => ({
      ...prevSaveDish,
      name: dishName,
      carb: dishValueCarbonoh,
      prot: dishValueProt,
      fat: dishValueFat,
    }));
  };

  const handleCancel = number => {
    setDishName(saveDish.name);
    setDishValueCarbonoh(saveDish.carb);
    setDishValueProt(saveDish.prot);
    setDishValueFat(saveDish.fat);
    setEditMode({ ...editMode, [number]: false });
  };

  const handleSave = number => {
    setEditMode({ ...editMode, [number]: false });
  };

  return (
    <Container>
      <HeightContainer>
        <TitleWrap>
          <ArrowBack>
            <use xlinkHref={`${Icons}#icon-arrow-right`} />
          </ArrowBack>
          <Title>Diary</Title>
        </TitleWrap>
        <BigWrap>
          {mealPart.map((name, index) => (
            <MealWrap key={index}>
              <WrapNameValue>
                <WrapMealName>
                  <svg width="32px" height="32px">
                    <use xlinkHref={`${Meals}#icon-${name}`} />
                  </svg>
                  <MealName>{capitalizeFirstLetter(name)}</MealName>
                </WrapMealName>
                <MealContainList>
                  <MealContain>Carbonohidrates:</MealContain>
                  <MealValue>20</MealValue>
                  <MealContain>Protein:</MealContain>
                  <MealValue>20</MealValue>
                  <MealContain>Fat:</MealContain>
                  <MealValue>20</MealValue>
                </MealContainList>
              </WrapNameValue>
              <ListWrap>
                <MealList>
                  {[1, 2, 3, 4].map(number => (
                    <MealItem key={number}>
                      <Number>{number}</Number>
                      {isDish[number] ? (
                        <Dish>
                          {editMode[number] ? (
                            <>
                              <DishNameEdit
                                type="text"
                                value={dishName}
                                onChange={e => setDishName(e.target.value)}
                              />
                              <CircleR onClick={() => handleCancel(number)} />
                              <CircleG onClick={() => handleSave(number)} />
                              <StatWrap>
                                <DishStatEdit htmlFor={`carbonoh-${number}`}>
                                  Carb.
                                </DishStatEdit>
                                <DishValueEdit
                                  type="number"
                                  id={`carbonoh-${number}`}
                                  name={`carbonoh-${number}`}
                                  value={dishValueCarbonoh}
                                  onChange={e =>
                                    setDishValueCarbonoh(e.target.value)
                                  }
                                />
                                <DishStatEdit htmlFor={`prot-${number}`}>
                                  Prot.
                                </DishStatEdit>
                                <DishValueEdit
                                  type="number"
                                  id={`prot-${number}`}
                                  name={`prot-${number}`}
                                  value={dishValueProt}
                                  onChange={e =>
                                    setDishValueProt(e.target.value)
                                  }
                                />
                                <DishStatEdit htmlFor={`fat-${number}`}>
                                  Fat.
                                </DishStatEdit>
                                <DishValueEdit
                                  type="number"
                                  id={`fat-${number}`}
                                  name={`fat-${number}`}
                                  value={dishValueFat}
                                  onChange={e =>
                                    setDishValueFat(e.target.value)
                                  }
                                />
                              </StatWrap>
                            </>
                          ) : (
                            <>
                              <DishName>{dishName}</DishName>
                              <EditWrap onClick={() => handleEdit(number)}>
                                <svg width="16px" height="16px">
                                  <use xlinkHref={`${Icons}#icon-edit`} />
                                </svg>
                                <EditText>Edit</EditText>
                              </EditWrap>
                              <StatWrap>
                                <DishStat>Carb.</DishStat>
                                <DishValue>{dishValueCarbonoh}</DishValue>
                                <DishStat>Prot.</DishStat>
                                <DishValue>{dishValueProt}</DishValue>
                                <DishStat>Fat.</DishStat>
                                <DishValue>{dishValueFat}</DishValue>
                              </StatWrap>
                            </>
                          )}
                        </Dish>
                      ) : (
                        <>
                          {!isDish[1] ||
                            (isDish[number - 1] !== false ? (
                              <MealRecordWrap key={number - 0.5}>
                                <svg width="16px" height="16px">
                                  <use xlinkHref={`${Icons}#icon-add`} />
                                </svg>
                                Record your meal
                              </MealRecordWrap>
                            ) : (
                              <Space />
                            ))}
                        </>
                      )}
                    </MealItem>
                  ))}
                </MealList>
              </ListWrap>
            </MealWrap>
          ))}
        </BigWrap>
      </HeightContainer>
    </Container>
  );
};
