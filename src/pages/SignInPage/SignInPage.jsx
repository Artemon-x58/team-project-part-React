import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

import correctIcons from '../../icons/correct.svg';
import errorIcons from '../../icons/error.svg';
import eyeHover from '../../icons/eye-hover.svg';
import eyeOff from '../../icons/eye-off.svg';

import Tracker from '../../img/Sport-and-fitness-tracker.png';

import {
  ButtonWrapper,
  InputWrapper,
  Button,
  Descriptions,
  FormikFieldsWrapper,
  ImageWrapper,
  StepWrapper,
  Title,
  Input,
  Redirection,
  RedirectionLink,
  RedirectionWrapper,
  ForgotLink,
  StyledErrorMessage,
  SuccessfullyMessagesEmail,
  SuccessfullyMessagesPassword,
  IconWrapper,
  CorrectIcons,
} from './SignInPage.styled';
import { login } from 'redux/auth/authOperations';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { Loader } from '../../components/Loader/Loader';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const isRefreshing = useSelector(selectIsRefreshing);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    const { meta } = await dispatch(login(values));

    if (meta.requestStatus === 'fulfilled') {
      resetForm();
      navigate('/main');
    } else {
      toast.error('Email or password is wrong');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {formikProps => (
        <>
          <Form autoComplete="off">
            <StepWrapper>
              <ImageWrapper>
                <img src={Tracker} alt="avatar" />
              </ImageWrapper>
              <FormikFieldsWrapper>
                <Title>Sign in</Title>
                <Descriptions>
                  You need to login to use the service
                </Descriptions>
                <InputWrapper>
                  <label htmlFor="email"></label>
                  <Input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    className={
                      formikProps.touched.email && formikProps.errors.email
                        ? 'hasError'
                        : formikProps.touched.email && !formikProps.errors.email
                        ? 'hasSuccess'
                        : ''
                    }
                  />

                  {formikProps.touched.email && !formikProps.errors.email && (
                    <>
                      <CorrectIcons src={correctIcons} alt="correctIcons" />
                      <SuccessfullyMessagesEmail>
                        Valid email
                      </SuccessfullyMessagesEmail>
                    </>
                  )}

                  {formikProps.touched.email && formikProps.errors.email && (
                    <>
                      <CorrectIcons src={errorIcons} alt="test" />
                      <ErrorMessage
                        name="email"
                        component={StyledErrorMessage}
                      />
                    </>
                  )}

                  <label htmlFor="password"></label>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="Password"
                    className={
                      formikProps.touched.password &&
                      formikProps.errors.password
                        ? 'hasError'
                        : formikProps.touched.password &&
                          !formikProps.errors.password
                        ? 'hasSuccess'
                        : ''
                    }
                    ispassword="true"
                  />
                  <IconWrapper onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <img src={eyeOff} alt="eye off" />
                    ) : (
                      <img src={eyeHover} alt="eye hover" />
                    )}
                  </IconWrapper>

                  {formikProps.touched.password &&
                    !formikProps.errors.password && (
                      <SuccessfullyMessagesPassword>
                        Valid password
                      </SuccessfullyMessagesPassword>
                    )}
                  <ErrorMessage
                    name="password"
                    component={StyledErrorMessage}
                  />
                </InputWrapper>
                <ButtonWrapper>
                  <Button type="submit">Sign In</Button>
                  <ForgotLink to="/forgot-password">
                    Forgot your password?
                  </ForgotLink>
                </ButtonWrapper>
                <RedirectionWrapper>
                  <Redirection>If you don't have an account yet</Redirection>
                  <RedirectionLink to="/signup">Sign up</RedirectionLink>
                </RedirectionWrapper>
              </FormikFieldsWrapper>
            </StepWrapper>
          </Form>
          {isRefreshing && <Loader />}
        </>
      )}
    </Formik>
  );
};
