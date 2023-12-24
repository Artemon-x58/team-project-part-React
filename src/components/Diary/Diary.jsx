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
import {
  deleteDiariesById,
  fetchAllDiaries,
  updateDiariesById,
} from 'redux/diary/diaryOperations';
const validMealTypes = ['breakfast', 'lunch', 'dinner', 'snack'];

const initialState = { title: '', carbohydrates: 0, protein: 0, fat: 0 };
export const Diary = () => {
  const dispatch = useDispatch();
  const [currentDish, setCurrentDish] = useState(initialState);
  const diaries = useSelector(state => state.diaries);
  const [editMode, setEditMode] = useState({});
  const [mealName, setMealName] = useState('');
  const [isOpen, setOpen] = useState(false);
  const [originalDish, setOriginalDish] = useState({});
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
      console.log('Updated dish: ', updatedDish);
      return updatedDish;
    });
  };

  const handleEdit = dish => {
    setEditMode(prev => ({ ...prev, [dish._id]: true }));
    setCurrentDish({ ...dish });
    setOriginalDish({ ...dish });
  };

  const handleCancel = dishId => {
    setCurrentDish(originalDish);
    setEditMode(prev => ({ ...prev, [dishId]: false }));
  };

  const handleSave = async (dishId, mealType) => {
    const cleanedId = dishId.replace(/^"|"$/g, '');
    dispatch(
      updateDiariesById({
        id: cleanedId,
        diary: {
          meals: mealType,
          title: currentDish.title,
          carbohydrates: currentDish.carbohydrates,
          protein: currentDish.protein,
          fat: currentDish.fat,
        },
      })
    );
    console.log('Отправка данных на сервер: ', {
      id: cleanedId,
      meals: mealType,
      title: currentDish.title,
      carbohydrates: currentDish.carbohydrates,
      protein: currentDish.protein,
      fat: currentDish.fat,
    });
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
    } catch (error) {
      console.error('Ошибка при удалении:', error);
    }
  };
  useEffect(() => {
    dispatch(fetchAllDiaries());
  }, [dispatch]);

  const renderMealItems = (mealData, mealType) => {
    let items = [];
    const hasData = mealData && mealData.length > 0;

    for (let i = 1; i <= 4; i++) {
      if (!hasData && i === 1) {
        items.push(
          <MealItem key={`${mealType}-record-${i}`}>
            <Number>{i}</Number>
            <MealRecordWrap onClick={handleOpen(mealType)}>
              <svg width="16px" height="16px">
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
                      <StatWrap>
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
                      </StatWrap>
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
                    </>
                  ) : (
                    <>
                      <DishName>{dish.title}</DishName>
                      <StatWrap>
                        <DishStat>Carb.</DishStat>
                        <DishValue>{dish.carbohydrates}</DishValue>
                        <DishStat>Prot.</DishStat>
                        <DishValue>{dish.protein}</DishValue>
                        <DishStat>Fat.</DishStat>
                        <DishValue>{dish.fat}</DishValue>
                      </StatWrap>
                      <EditWrap onClick={() => handleEdit(dish)}>
                        <svg width="16px" height="16px">
                          <use xlinkHref={`${Icons}#icon-edit`} />
                        </svg>
                        <EditText>Edit</EditText>
                      </EditWrap>
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
                  <svg width="16px" height="16px">
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
                  {renderMealItems(diaries[mealType], mealType)}
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
  );
};
