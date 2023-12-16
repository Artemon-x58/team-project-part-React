import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Tracker from '../../img/Sport-and-fitness-tracker.png';
import { Container } from 'components/Container/Container.styled';
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
} from './SignInPage.styled';
import { login } from 'redux/auth/authOperations';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const SignInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values, { resetForm }) => {
    console.log('Форма надіслана зі значеннями:', values);
    dispatch(login(values));
    resetForm();
    navigate('/');
  };
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <StepWrapper>
            <ImageWrapper>
              <img src={Tracker} alt="avatar" />
            </ImageWrapper>
            <FormikFieldsWrapper>
              <Title>Sign up</Title>
              <Descriptions>You need to login to use the service</Descriptions>
              <InputWrapper>
                <label htmlFor="email"></label>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                />
                <ErrorMessage name="email" component="div" />
                <label htmlFor="password"></label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="div" />
              </InputWrapper>
              <ButtonWrapper>
                <Button type="submit">Sign In</Button>
              </ButtonWrapper>
            </FormikFieldsWrapper>
          </StepWrapper>
        </Form>
      </Formik>
    </Container>
  );
};
