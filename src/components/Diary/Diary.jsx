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
  BigWrap,
  Space,
  DishNameEdit,
  DishStatEdit,
  DishValueEdit,
  CircleWrap,
  CircleCancel,
  CircleSave,
  CircleDelete,
  MoreLink,
} from './Diary.styled';
import { useEffect, useState } from 'react';
import { RecordDiaryModal } from 'components/RecordDiaryModal/RecordDiaryModal';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllDiaries } from 'redux/diary/diaryOperations';

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
  const [mealName, setMealName] = useState('');
  const [editMode, setEditMode] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const dispatch = useDispatch();

  const [isOpen, setOpen] = useState(false);
  const [dishName, setDishName] = useState('English breakfast');
  const [dishValueCarbonoh, setDishValueCarbonoh] = useState(20);
  const [dishValueProt, setDishValueProt] = useState(20);
  const [dishValueFat, setDishValueFat] = useState(20);
  const [saveDish, setSaveDish] = useState(initialValue);
  const capitalizeFirstLetter = word => {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  };
  const handleOpen = partMeal => () => {
    setOpen(true);
    setMealName(partMeal);
  };
  const handleClose = () => {
    setOpen(false);
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
  useEffect(() => {
    dispatch(fetchAllDiaries());
  }, [dispatch]);

  return (
    <Container>
      <HeightContainer>
        <TitleWrap>
          <MoreLink to="/main">
            <ArrowBack>
              <use xlinkHref={`${Icons}#icon-arrow-right`} />
            </ArrowBack>
          </MoreLink>
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
                                id={`${name}-${number}-dishname`}
                                value={dishName}
                                onChange={e => setDishName(e.target.value)}
                              />
                              <CircleWrap>
                                <CircleSave onClick={() => handleSave(number)}>
                                  <use xlinkHref={`${Icons}#icon-check`} />
                                </CircleSave>
                                <CircleCancel
                                  onClick={() => handleCancel(number)}
                                >
                                  <use xlinkHref={`${Icons}#icon-x`} />
                                </CircleCancel>
                                <CircleDelete>
                                  <use xlinkHref={`${Icons}#icon-basket`} />
                                </CircleDelete>
                              </CircleWrap>

                              <StatWrap>
                                <DishStatEdit
                                  htmlFor={`${name}-${number}-carb`}
                                >
                                  Carb.
                                </DishStatEdit>
                                <DishValueEdit
                                  type="number"
                                  id={`${name}-${number}-carb`}
                                  name={`${name}-${number}-carb`}
                                  value={dishValueCarbonoh}
                                  onChange={e =>
                                    setDishValueCarbonoh(e.target.value)
                                  }
                                />
                                <DishStatEdit
                                  htmlFor={`${name}-${number}-prot`}
                                >
                                  Prot.
                                </DishStatEdit>
                                <DishValueEdit
                                  type="number"
                                  id={`${name}-${number}-prot`}
                                  name={`${name}-${number}-prot`}
                                  value={dishValueProt}
                                  onChange={e =>
                                    setDishValueProt(e.target.value)
                                  }
                                />
                                <DishStatEdit htmlFor={`${name}-${number}-fat`}>
                                  Fat.
                                </DishStatEdit>
                                <DishValueEdit
                                  type="number"
                                  id={`${name}-${number}-fat`}
                                  name={`${name}-${number}-fat`}
                                  value={dishValueFat}
                                  onChange={e =>
                                    setDishValueFat(e.target.value)
                                  }
                                />
                              </StatWrap>
                            </>
                          ) : (
                            <>
                              <DishName id={`${name}-${number}-dishname`}>
                                {dishName}
                              </DishName>
                              <EditWrap onClick={() => handleEdit(number)}>
                                <svg width="16px" height="16px">
                                  <use xlinkHref={`${Icons}#icon-edit`} />
                                </svg>
                                <EditText>Edit</EditText>
                              </EditWrap>
                              <StatWrap>
                                <DishStat>Carb.</DishStat>
                                <DishValue id={`${name}-${number}-carb`}>
                                  {dishValueCarbonoh}
                                </DishValue>
                                <DishStat>Prot.</DishStat>
                                <DishValue id={`${name}-${number}-prot`}>
                                  {dishValueProt}
                                </DishValue>
                                <DishStat>Fat.</DishStat>
                                <DishValue id={`${name}-${number}-fat`}>
                                  {dishValueFat}
                                </DishValue>
                              </StatWrap>
                            </>
                          )}
                        </Dish>
                      ) : (
                        <>
                          {!isDish[1] ||
                            (isDish[number - 1] !== false ? (
                              <MealRecordWrap
                                key={number - 0.5}
                                onClick={handleOpen(name)}
                              >
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
        <RecordDiaryModal
          handleClose={handleClose}
          open={isOpen}
          mealName={mealName}
        />
      </HeightContainer>
    </Container>
  );
};
