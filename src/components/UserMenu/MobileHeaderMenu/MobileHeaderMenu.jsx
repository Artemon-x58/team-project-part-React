import { useEffect, useRef, useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Icons from 'icons/icons.svg';

import LoseFat from 'img/Lose-fat-image-men.png';
import Maintake from 'img/Maintake-image-men.png';
import Muscle from 'img/Gain-muscle.png';
import WeightImg from 'img/Waight-image.png';

import {
  selectDataUser,
  selectisRefreshing,
} from 'redux/statistics/statisticsSelectors';
import {
  CardItemWrapper,
  CardMenuWrapper,
  CloseBtn,
  Descriptions,
  EditWeightBtn,
  Goal,
  GoalMenu,
  ImgWrapper,
  Label,
  Mark,
  MobileMenu,
  MobileMenuWrapper,
  OpenMenuBtn,
  Span,
  StyledFields,
  Subtitle,
  Name,
  Title,
  Value,
  Weight,
  Wrapper,
  ButtonWrapper,
  Button,
  ButtonBack,
  WeightMenu,
  InputWrapper,
  Input,
  CurrentDate,
  ValueDate,
  DateWrapper,
  StyledErrorMessage,
} from './MobileHeaderMenu.styled';
import { Profile } from '../../Profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateGoal,
  updateWeight,
} from 'redux/statistics/statisticsOperations';
import { Loader } from 'components/Loader/Loader';

const validationSchema = Yup.object().shape({
  weight: Yup.number()
    .positive('Weight must be a positive value')
    .min(5, 'The value cannot be less than 5')
    .max(300, 'The value cannot exceed 300')
    .required('Weight is required'),
});

export const MobileHeaderMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showGoal, setShowGoal] = useState(false);
  const [showWeight, setShowWeight] = useState(false);

  const userData = useSelector(selectDataUser);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectisRefreshing);
  const menuRef = useRef();

  const toggleShowMenu = () => {
    setShowMenu(showMenu => {
      if (showMenu === true) {
        setShowGoal(false);
        setShowWeight(false);
      }
      return !showMenu;
    });
  };
  const toggleShowGoal = () => {
    setShowGoal(showGoal => !showGoal);
  };
  const toggleShowWeight = () => {
    setShowWeight(showWeight => !showWeight);
  };

  const switchGoal = goal => {
    switch (goal) {
      case 'lose fat':
        return 'Lose fat';
      case 'maintain':
        return 'Maintain';
      case 'gain muscle':
        return 'Gain muscle';
      default:
        return 'Goal';
    }
  };
  const switchGoalImg = goal => {
    switch (goal) {
      case 'lose fat':
        return LoseFat;
      case 'maintain':
        return Maintake;
      case 'gain muscle':
        return Muscle;
      default:
        return LoseFat;
    }
  };
  const getCurrentDate = () => {
    const today = new Date();

    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    const formattedDate = `${day}.${month}.${year}`;

    return formattedDate;
  };

  const initialValues = {
    yourGoal: `${userData.yourGoal}`,
  };
  const initialWeight = {
    weight: `${userData.weight}`,
  };

  const handleSubmit = values => {
    dispatch(updateGoal(values));

    setShowGoal(false);
  };

  const handleWeightSubmit = values => {
    dispatch(updateWeight(values));
    setShowWeight(false);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
        setShowGoal(false);
        setShowWeight(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <MobileMenuWrapper ref={menuRef}>
      <OpenMenuBtn type="button" onClick={toggleShowMenu} $isOpen={showMenu}>
        <svg>
          <use xlinkHref={`${Icons}#icon-menu-header-mobile`} />
        </svg>
      </OpenMenuBtn>

      {showMenu && (
        <>
          {isLoading && <Loader />}
          <MobileMenu>
            <CardMenuWrapper>
              <CardItemWrapper>
                <ImgWrapper>
                  <img
                    src={switchGoalImg(userData.yourGoal)}
                    alt={userData.yourGoal}
                  />
                </ImgWrapper>
                <Wrapper>
                  <Title>Goal</Title>
                  <Value>
                    <Goal> {switchGoal(userData.yourGoal)}</Goal>
                    <OpenMenuBtn
                      type="button"
                      onClick={toggleShowGoal}
                      $isOpen={showGoal}
                    >
                      <svg>
                        <use xlinkHref={`${Icons}#icon-arrow-down`} />
                      </svg>
                    </OpenMenuBtn>
                  </Value>
                </Wrapper>
              </CardItemWrapper>
              <CardItemWrapper>
                <ImgWrapper>
                  <img src={WeightImg} alt="WeightImg" />
                </ImgWrapper>
                <div>
                  <Title>Weight</Title>
                  <Value>
                    <Weight>{userData.weight}</Weight>
                    <Mark>kg</Mark>
                    <EditWeightBtn type="button" onClick={toggleShowWeight}>
                      <svg stroke="#E3FFA8">
                        <use xlinkHref={`${Icons}#icon-edit`} />
                      </svg>
                    </EditWeightBtn>
                  </Value>
                </div>
              </CardItemWrapper>
              <CloseBtn type="button" onClick={() => setShowMenu(false)}>
                <svg>
                  <use xlinkHref={`${Icons}#icon-close-circle`} />
                </svg>
              </CloseBtn>
            </CardMenuWrapper>
          </MobileMenu>
        </>
      )}
      {showGoal && (
        <GoalMenu>
          <h2>Target selection</h2>
          <Subtitle>
            The service will adjust your calorie intake to your goal
          </Subtitle>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <div>
                <Label>
                  <StyledFields type="radio" name="yourGoal" value="lose fat" />
                  <Descriptions>
                    <Span>
                      <img src={LoseFat} alt="LoseFat" />
                    </Span>
                    <Name>Lose fat</Name>
                  </Descriptions>
                </Label>
              </div>
              <div>
                <Label>
                  <StyledFields type="radio" name="yourGoal" value="maintain" />
                  <Descriptions>
                    <Span>
                      <img src={Maintake} alt="Maintake" />
                    </Span>
                    <Name>Maintain</Name>
                  </Descriptions>
                </Label>
              </div>
              <div>
                <Label>
                  <StyledFields
                    type="radio"
                    name="yourGoal"
                    value="gain muscle"
                  />
                  <Descriptions>
                    <Span>
                      <img src={Muscle} alt="Muscle" />
                    </Span>
                    <Name>Gain Muscle</Name>
                  </Descriptions>
                </Label>
              </div>

              <ButtonWrapper>
                <Button type="submit">Confirm</Button>
                <ButtonBack type="button" onClick={toggleShowGoal}>
                  Cancel
                </ButtonBack>
              </ButtonWrapper>
            </Form>
          </Formik>
        </GoalMenu>
      )}
      {showWeight && (
        <WeightMenu>
          <h2>Enter your current weight</h2>
          <Subtitle>You can record your weight once a day</Subtitle>
          <DateWrapper>
            <CurrentDate>Today</CurrentDate>
            <ValueDate>{getCurrentDate()}</ValueDate>
          </DateWrapper>
          <Formik
            initialValues={initialWeight}
            onSubmit={handleWeightSubmit}
            validationSchema={validationSchema}
          >
            <Form autoComplete="off">
              <InputWrapper>
                <label htmlFor="weight"></label>
                <Input
                  type="number"
                  id="weight"
                  name="weight"
                  placeholder="Enter your weight"
                />
                <ErrorMessage name="weight" component={StyledErrorMessage} />
              </InputWrapper>

              <ButtonWrapper>
                <Button type="submit">Confirm</Button>
                <ButtonBack type="button" onClick={toggleShowWeight}>
                  Cancel
                </ButtonBack>
              </ButtonWrapper>
            </Form>
          </Formik>
        </WeightMenu>
      )}
      <Profile />
    </MobileMenuWrapper>
  );
};
