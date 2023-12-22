import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

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
} from './SignInPage.styled';
import { login } from 'redux/auth/authOperations';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { Loader } from '../Loader/Loader';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const SignInPage = () => {
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
      {!isRefreshing ? (
        <Form autoComplete="off">
          <StepWrapper>
            <ImageWrapper>
              <img src={Tracker} alt="avatar" />
            </ImageWrapper>
            <FormikFieldsWrapper>
              <Title>Sign in</Title>
              <Descriptions>You need to login to use the service</Descriptions>
              <InputWrapper>
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
      ) : (
        <Loader />
      )}
    </Formik>
  );
};
