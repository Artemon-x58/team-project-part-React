import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Tracker from '../../img/Sport-and-fitness-tracker.png';
import Hiking from '../../img/Summer-hiking.png';
import Fitness from '../../img/Elder-fitness.png';
import Body from '../../img/Body-contouring.png';
import Workout from '../../img/Workout-fashion.png';

import { StepSignUp } from '../StepSignUp/StepSignUp';
import {
  ActivityLabel,
  ActivityWrapper,
  Button,
  ButtonBack,
  ButtonWrapper,
  GenderRadioField,
  Input,
  InputWrapper,
  RadioWrapper,
  RadioWrapperGender,
  Redirection,
  RedirectionLink,
  RedirectionWrapper,
  StyledAgeLabel,
  StyledBodyParamsLabel,
  StyledErrorAgeMessage,
  StyledErrorMessage,
  StyledErrorWeightMessage,
  StyledField,
  StyledLable,
  StyledLableGender,
  TitleGender,
  WrapperAge,
  WrappperBodyParams,
} from './SignUpPage.styled';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import toast from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

const validationSchemas = {
  step1: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Please provide a valid email')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must contain more than 6 characters')
      .matches(
        /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]*$/,
        'Password must contain at least one uppercase letter and one digit'
      )
      .required('Password is required'),
  }),
  step2: Yup.object().shape({
    yourGoal: Yup.string().required(),
  }),
  step3: Yup.object().shape({
    gender: Yup.string().required(),
    age: Yup.number('The value must be an integer')
      .required('Age is required')
      .min(1)
      .max(110, 'The value cannot exceed 110')
      .positive('Age must be a positive value'),
  }),
  step4: Yup.object().shape({
    height: Yup.number('The value must be an integer')
      .required('Height is required')
      .min(50, 'The value cannot be less than 50')
      .max(240, 'The value cannot exceed 240')
      .positive('Height must be a positive value'),
    weight: Yup.number('The value must be an integer')
      .required('Weight is required')
      .min(5, 'The value cannot be less than 5')
      .max(300, 'The value cannot exceed 300')
      .positive('Weight must be a positive value'),
  }),
  step5: Yup.object().shape({
    kef: Yup.string().required(),
  }),
};

export const SignUpPage = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(1);
  const TOTAL_STEPS = 5;
  const initialValues = {
    name: '',
    email: '',
    password: '',
    yourGoal: 'lose fat',
    gender: 'male',
    age: '',
    height: '',
    weight: '',
    kef: '1.2',
  };
  const handleSubmit = async (values, { resetForm }) => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    } else {
      const { meta } = await dispatch(register(values));

      if (meta.requestStatus !== 'fulfilled') {
        return toast.error('Something went wrong. Try again!');
      }

      toast.success('Registration was successful');
      resetForm();
      navigate('/signin');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemas[`step${currentStep}`]}
      onSubmit={handleSubmit}
    >
      {!isRefreshing ? (
        <Form autoComplete="off">
          {currentStep === 1 && (
            <StepSignUp
              image={Tracker}
              title="Sign up"
              description="You need to register to use the service"
            >
              <InputWrapper>
                <label htmlFor="name"></label>
                <Input type="text" id="name" name="name" placeholder="Name" />
                <ErrorMessage name="name" component={StyledErrorMessage} />
                <label htmlFor="email"></label>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                />
                <ErrorMessage name="email" component={StyledErrorMessage} />
                <label htmlFor="password"></label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component={StyledErrorMessage} />
              </InputWrapper>
              <ButtonWrapper>
                <Button type="submit">Next</Button>
              </ButtonWrapper>
              <RedirectionWrapper>
                <Redirection>Do you already have an account?</Redirection>
                <RedirectionLink to="/signin">Sign in</RedirectionLink>
              </RedirectionWrapper>
            </StepSignUp>
          )}

          {currentStep === 2 && (
            <StepSignUp
              image={Hiking}
              title="Your goal"
              description="Choose a goal so that we can help you effectively"
            >
              <RadioWrapper>
                <StyledLable>
                  <StyledField type="radio" name="yourGoal" value="lose fat" />
                  Lose Fat
                </StyledLable>
                <StyledLable>
                  <StyledField type="radio" name="yourGoal" value="maintain" />
                  Maintain
                </StyledLable>
                <StyledLable>
                  <StyledField
                    type="radio"
                    name="yourGoal"
                    value="gain muscle"
                  />
                  Gain Muscle
                </StyledLable>
              </RadioWrapper>
              <ErrorMessage name="yourGoal" component={StyledErrorMessage} />
              <ButtonWrapper>
                <Button type="submit">Next</Button>
              </ButtonWrapper>
            </StepSignUp>
          )}

          {currentStep === 3 && (
            <StepSignUp
              image={Fitness}
              title="Select gender, Age"
              description="Choose a goal so that we can help you effectively"
            >
              <RadioWrapperGender>
                <TitleGender>Gender</TitleGender>
                <StyledLableGender>
                  <GenderRadioField type="radio" name="gender" value="male" />
                  Male
                </StyledLableGender>
                <StyledLableGender>
                  <GenderRadioField type="radio" name="gender" value="female" />
                  Female
                </StyledLableGender>
                <ErrorMessage name="gender" component={StyledErrorMessage} />
              </RadioWrapperGender>
              <WrapperAge>
                <StyledAgeLabel>
                  Your age
                  <Input
                    type="text"
                    id="age"
                    name="age"
                    placeholder="Enter your age"
                  />
                </StyledAgeLabel>
                <ErrorMessage name="age" component={StyledErrorAgeMessage} />
              </WrapperAge>
              <ButtonWrapper>
                <Button type="submit">Next</Button>
                <ButtonBack
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Back
                </ButtonBack>
              </ButtonWrapper>
            </StepSignUp>
          )}
          {currentStep === 4 && (
            <StepSignUp
              image={Body}
              title="Body parameters"
              description="Enter your parameters for correct performance tracking"
            >
              <WrappperBodyParams>
                <StyledBodyParamsLabel htmlFor="height">
                  Height
                  <Input
                    type="text"
                    id="height"
                    name="height"
                    placeholder="Enter your height"
                  />
                </StyledBodyParamsLabel>
                <ErrorMessage name="height" component={StyledErrorMessage} />

                <StyledBodyParamsLabel htmlFor="weight">
                  Weight
                  <Input
                    type="text"
                    id="weight"
                    name="weight"
                    placeholder="Enter your weight"
                  />
                </StyledBodyParamsLabel>
                <ErrorMessage
                  name="weight"
                  component={StyledErrorWeightMessage}
                />
              </WrappperBodyParams>
              <ButtonWrapper>
                <Button type="submit">Next</Button>
                <ButtonBack
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Back
                </ButtonBack>
              </ButtonWrapper>
            </StepSignUp>
          )}
          {currentStep === 5 && (
            <StepSignUp
              image={Workout}
              title="Your Activity"
              description="To correctly calculate calorie and water intake"
            >
              <ActivityWrapper>
                <ActivityLabel>
                  <Field type="radio" name="kef" value="1.2" />
                  1.2 - if you do not have physical activity and sedentary work
                </ActivityLabel>
                <ActivityLabel>
                  <Field type="radio" name="kef" value="1.375" />
                  1.375 - if you do short runs or light gymnastics 1-3 times a
                  week
                </ActivityLabel>
                <ActivityLabel>
                  <Field type="radio" name="kef" value="1.55" />
                  1.55 - if you play sports with average loads 3-5 times a week
                </ActivityLabel>
                <ActivityLabel>
                  <Field type="radio" name="kef" value="1.725" />
                  1.725 ​​- if you train fully 6-7 times a week
                </ActivityLabel>
                <ActivityLabel>
                  <Field type="radio" name="kef" value="1.9" />
                  1.9 - if your work is related to physical labor, you train 2
                  times a day and include strength exercises in your training
                  program
                </ActivityLabel>

                <ErrorMessage name="kef" component={StyledErrorMessage} />
              </ActivityWrapper>
              <ButtonWrapper>
                <Button type="submit">Sign Up</Button>
                <ButtonBack
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Back
                </ButtonBack>
              </ButtonWrapper>
            </StepSignUp>
          )}
        </Form>
      ) : (
        <Loader />
      )}
    </Formik>
  );
};
