import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Icons from 'icons/icons.svg';
import LoseFat from 'img/Lose-fat-image-men.png';
import Maintake from 'img/Maintake-image-men.png';
import Muscle from 'img/Gain-muscle.png';
import WeightImg from 'img/Waight-image.png';

import { selectDataUser } from 'redux/statistics/statisticsSelectors';

import {
  Button,
  ButtonBack,
  CardItemWrapper,
  CardMenuWrapper,
  CurrentDate,
  DateWrapper,
  Descriptions,
  EditWeightBtn,
  Goal,
  GoalMenu,
  GoalMenuWrapper,
  ImgWrapper,
  Input,
  InputWrapper,
  Label,
  Mark,
  MenuWrapper,
  Name,
  OpenMenuBtn,
  Span,
  StyledErrorMessage,
  StyledFields,
  StyledForm,
  Subtitle,
  Title,
  Value,
  ValueDate,
  Weight,
  WeightMenu,
  Wrapper,
} from './TablDeskHeaderMenu.styled';

import { Profile } from 'components/Profile/Profile';
import {
  updateGoal,
  updateWeight,
} from 'redux/statistics/statisticsOperations';

const validationSchema = Yup.object().shape({
  weight: Yup.number()
    .positive('Weight must be a positive value')
    .min(5, 'The value cannot be less than 5')
    .max(300, 'The value cannot exceed 300')
    .required('Weight is required'),
});

export const TablDeskHeaderMenu = () => {
  const [showGoal, setShowGoal] = useState(false);
  const [showWeight, setShowWeight] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector(selectDataUser);
  const menuRef = useRef();

  const initialValues = {
    yourGoal: `${userData.yourGoal}`,
  };
  const initialWeight = {
    weight: `${userData.weight}`,
  };

  const toggleShowGoal = () => {
    setShowGoal(prevState => {
      if (showWeight === true) {
        setShowWeight(false);
      }
      return !prevState;
    });
  };
  const toggleShowWeight = () => {
    setShowWeight(prevState => {
      if (showGoal === true) {
        setShowGoal(false);
      }
      return !prevState;
    });
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
    <MenuWrapper ref={menuRef}>
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
              <OpenMenuBtn type="button" onClick={toggleShowGoal}>
                <svg>
                  <use xlinkHref={`${Icons}#icon-arrow-down`} />
                </svg>
              </OpenMenuBtn>
            </Value>
          </Wrapper>
        </CardItemWrapper>
        {showGoal && (
          <GoalMenu>
            <GoalMenuWrapper>
              <h2>Target selection</h2>
              <Subtitle>
                The service will adjust your calorie intake to your goal
              </Subtitle>
              <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                  <div>
                    <Label>
                      <StyledFields
                        type="radio"
                        name="yourGoal"
                        value="lose fat"
                      />
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
                      <StyledFields
                        type="radio"
                        name="yourGoal"
                        value="maintain"
                      />
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

                  <Button type="submit">Confirm</Button>
                </Form>
              </Formik>
              <ButtonBack type="button" onClick={toggleShowGoal}>
                <svg>
                  <use xlinkHref={`${Icons}#icon-close-circle`} />
                </svg>
              </ButtonBack>
            </GoalMenuWrapper>
          </GoalMenu>
        )}
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
                <svg>
                  <use xlinkHref={`${Icons}#icon-edit`} />
                </svg>
              </EditWeightBtn>
            </Value>
          </div>
        </CardItemWrapper>
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
              <StyledForm autoComplete="off">
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

                <Button type="submit">Confirm</Button>
              </StyledForm>
            </Formik>
            <ButtonBack type="button" onClick={toggleShowWeight}>
              <svg>
                <use xlinkHref={`${Icons}#icon-close-circle`} />
              </svg>
            </ButtonBack>
          </WeightMenu>
        )}
      </CardMenuWrapper>
      <Profile />
    </MenuWrapper>
  );
};
