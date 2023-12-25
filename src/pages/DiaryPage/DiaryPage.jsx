import Icons from '../../icons/icons.svg';
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
  MealContainCal,
  StatEditWrap,
} from './DiaryPage.styled';
import { useEffect, useState } from 'react';
import { RecordDiaryModal } from 'components/RecordDiaryModal/RecordDiaryModal';
import { useSelector, useDispatch } from 'react-redux';
import {
  addDiaries,
  deleteDiariesById,
  fetchAllDiaries,
  updateDiariesById,
} from 'redux/diary/diaryOperations';
import {
  selectBreakfastSumNutrientsToday,
  selectDinnerSumNutrientsToday,
  selectLunchSumNutrientsToday,
  selectSnackSumNutrientsToday,
} from 'redux/diary/diarySelectors';
const validMealTypes = ['breakfast', 'lunch', 'dinner', 'snack'];

const initialState = {
  title: '',
  calories: 0,
  carbohydrates: 0,
  protein: 0,
  fat: 0,
};
export const DiaryPage = () => {
  const dispatch = useDispatch();
  const [currentDish, setCurrentDish] = useState(initialState);
  const diaries = useSelector(state => state.diaries);
  const [editMode, setEditMode] = useState({});
  const [mealName, setMealName] = useState('');
  const [editingMealType, setEditingMealType] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [originalDish, setOriginalDish] = useState({});
  const [editCal, setEditCal] = useState(false);
  const breakfastNutrients = useSelector(selectBreakfastSumNutrientsToday);
  const lunchNutrients = useSelector(selectLunchSumNutrientsToday);
  const dinnerNutrients = useSelector(selectDinnerSumNutrientsToday);
  const snackNutrients = useSelector(selectSnackSumNutrientsToday);
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

  const handleDishDataChange = (field, value) => {
    setCurrentDish(prev => {
      const updatedDish = { ...prev, [field]: value };
      return updatedDish;
    });
  };

  const handleEdit = (dish, mealType) => {
    setEditMode(prev => ({ ...prev, [dish._id]: true }));
    setEditCal(true);
    setCurrentDish({ ...dish });
    setOriginalDish({ ...dish });
    setEditingMealType(mealType);
  };

  const handleCancel = dishId => {
    setCurrentDish(originalDish);
    setEditMode(prev => ({ ...prev, [dishId]: false }));
    setEditCal(false);
  };

  const handleSave = async (dishId, mealType) => {
    const cleanedId = dishId.replace(/^"|"$/g, '');
    dispatch(
      updateDiariesById({
        id: cleanedId,
        diary: {
          meals: mealType,
          title: currentDish.title,
          calories: currentDish.calories,
          carbohydrates: currentDish.carbohydrates,
          protein: currentDish.protein,
          fat: currentDish.fat,
        },
      })
    );
    setEditCal(false);
    setEditMode(prev => ({ ...prev, [dishId]: false }));
  };
  const handleDelete = async (dishId, mealType) => {
    try {
      await dispatch(
        deleteDiariesById({
          id: dishId,
          title: mealType,
        })
      );
      dispatch(fetchAllDiaries());
      setEditCal(false);
    } catch (error) {
      console.error('Ошибка при удалении:', error);
    }
  };
  useEffect(() => {
    dispatch(fetchAllDiaries());
  }, [dispatch]);
  const getNutrients = (mealType, part) => {
    switch (mealType) {
      case 'breakfast':
        return breakfastNutrients[part];
      case 'lunch':
        return lunchNutrients[part];
      case 'dinner':
        return dinnerNutrients[part];
      case 'snack':
        return snackNutrients[part];
      default:
        return 0;
    }
  };
  const renderMealItems = (mealData, mealType) => {
    let items = [];
    const hasData = mealData && mealData.length > 0;

    for (let i = 1; i <= 4; i++) {
      if (!hasData && i === 1) {
        items.push(
          <MealItem key={`${mealType}-record-${i}`}>
            <Number>{i}</Number>
            <MealRecordWrap onClick={handleOpen(mealType)}>
              <svg width="16px" height="16px" stroke="#E3FFA8">
                <use xlinkHref={`${Icons}#icon-add`} />
              </svg>
              Record your meal
            </MealRecordWrap>
          </MealItem>
        );
      } else if (!hasData) {
        items.push(
          <MealItem key={`${mealType}-space-${i}`}>
            <Number>{i}</Number>
            <Space />
          </MealItem>
        );
      } else {
        const dish = mealData[i - 1];
        const prevDish = mealData[i - 2] === undefined && i !== 1;
        if (dish !== undefined) {
          items.push(
            <MealItem key={dish._id}>
              <Number>{i}</Number>
              {dish ? (
                <Dish>
                  {editMode[dish._id] ? (
                    <>
                      <DishNameEdit
                        type="text"
                        value={currentDish.title || ''}
                        onChange={e =>
                          setCurrentDish({
                            ...currentDish,
                            title: e.target.value,
                          })
                        }
                      />
                      <CircleWrap>
                        <CircleSave
                          onClick={() => handleSave(dish._id, mealType)}
                        >
                          <use xlinkHref={`${Icons}#icon-check`} />
                        </CircleSave>
                        <CircleCancel onClick={() => handleCancel(dish._id)}>
                          <use xlinkHref={`${Icons}#icon-x`} />
                        </CircleCancel>
                        <CircleDelete
                          onClick={() => handleDelete(dish._id, mealType)}
                        >
                          <use xlinkHref={`${Icons}#icon-basket`} />
                        </CircleDelete>
                      </CircleWrap>
                      <StatEditWrap>
                        <DishStatEdit htmlFor={`cal-${dish._id}`}>
                          Cal.
                        </DishStatEdit>
                        <DishValueEdit
                          type="number"
                          id={`cal-${dish._id}`}
                          name={`cal-${dish._id}`}
                          value={currentDish.calories}
                          onChange={e =>
                            handleDishDataChange('calories', e.target.value)
                          }
                        />

                        <DishStatEdit htmlFor={`carb-${dish._id}`}>
                          Carb.
                        </DishStatEdit>
                        <DishValueEdit
                          type="number"
                          id={`carb-${dish._id}`}
                          name={`carb-${dish._id}`}
                          value={currentDish.carbohydrates}
                          onChange={e =>
                            handleDishDataChange(
                              'carbohydrates',
                              e.target.value
                            )
                          }
                        />
                        <DishStatEdit htmlFor={`prot-${dish._id}`}>
                          Prot.
                        </DishStatEdit>
                        <DishValueEdit
                          type="number"
                          id={`prot-${dish._id}`}
                          name={`prot-${dish._id}`}
                          value={currentDish.protein}
                          onChange={e =>
                            handleDishDataChange('protein', e.target.value)
                          }
                        />
                        <DishStatEdit htmlFor={`fat-${dish._id}`}>
                          Fat.
                        </DishStatEdit>
                        <DishValueEdit
                          type="number"
                          id={`fat-${dish._id}`}
                          name={`fat-${dish._id}`}
                          value={currentDish.fat}
                          onChange={e =>
                            handleDishDataChange('fat', e.target.value)
                          }
                        />
                      </StatEditWrap>
                    </>
                  ) : (
                    <>
                      <DishName>{dish.title}</DishName>
                      <EditWrap onClick={() => handleEdit(dish, mealType)}>
                        <svg width="16px" height="16px" stroke="#B6B6B6">
                          <use xlinkHref={`${Icons}#icon-edit`} />
                        </svg>
                        <EditText>Edit</EditText>
                      </EditWrap>
                      <StatWrap>
                        <DishStat>Carb.</DishStat>
                        <DishValue>{dish.carbohydrates}</DishValue>
                        <DishStat>Prot.</DishStat>
                        <DishValue>{dish.protein}</DishValue>
                        <DishStat>Fat.</DishStat>
                        <DishValue>{dish.fat}</DishValue>
                      </StatWrap>
                    </>
                  )}
                </Dish>
              ) : (
                <Space />
              )}
            </MealItem>
          );
        } else if (dish === undefined) {
          items.push(
            <MealItem key={`${mealType}-record-${i}`}>
              <Number>{i}</Number>
              {!prevDish ? (
                <MealRecordWrap onClick={handleOpen(mealType)}>
                  <svg width="16px" height="16px" stroke="#E3FFA8">
                    <use xlinkHref={`${Icons}#icon-add`} />
                  </svg>
                  Record your meal
                </MealRecordWrap>
              ) : (
                <Space />
              )}
            </MealItem>
          );
        }
      }
    }

    return items;
  };

  return (
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
        {Object.keys(diaries)
          .filter(mealType => validMealTypes.includes(mealType))
          .map((mealType, index) => (
            <MealWrap key={index}>
              <WrapNameValue>
                <WrapMealName>
                  <svg width="32px" height="32px">
                    <use xlinkHref={`${Meals}#icon-${mealType}`} />
                  </svg>
                  <MealName>{capitalizeFirstLetter(mealType)}</MealName>
                </WrapMealName>
                <MealContainList>
                  {editCal && editingMealType === mealType ? (
                    <MealContainCal>Calories</MealContainCal>
                  ) : (
                    <></>
                  )}
                  <MealContain>Carbonohidrates:</MealContain>
                  <MealValue>
                    {getNutrients(mealType, 'carbohydrates')}
                  </MealValue>
                  <MealContain>Protein:</MealContain>
                  <MealValue>{getNutrients(mealType, 'protein')}</MealValue>
                  <MealContain>Fat:</MealContain>
                  <MealValue>{getNutrients(mealType, 'fat')}</MealValue>
                </MealContainList>
              </WrapNameValue>
              <ListWrap>
                <MealList>
                  {renderMealItems(diaries[mealType], mealType)}
                </MealList>
              </ListWrap>
            </MealWrap>
          ))}
      </BigWrap>
      <RecordDiaryModal
        adddiary={addDiaries}
        handleClose={handleClose}
        open={isOpen}
        mealName={mealName}
      />
    </HeightContainer>
  );
};
