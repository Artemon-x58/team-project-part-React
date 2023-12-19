import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

import Tracker from '../../img/Sport-and-fitness-tracker.png';
import { Container } from 'components/Container/Container.styled';
import {
  Button,
  ButtonWrapper,
  Descriptions,
  FormikFieldsWrapper,
  ImageWrapper,
  Input,
  InputWrapper,
  Redirection,
  RedirectionLink,
  RedirectionWrapper,
  StepWrapper,
  Title,
} from './ForgotPasswordPage.styled';
import { forgotPassword } from 'redux/auth/authOperations';
import { Loader } from 'components/Loader/Loader';
import { selectIsRefreshing } from 'redux/auth/authSelectors';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
});

export const ForgotPasswordPage = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
  };
  const handleSubmit = async (values, { resetForm }) => {
    const { meta } = await dispatch(forgotPassword(values));

    if (meta.requestStatus === 'fulfilled') {
      toast.success('A new password has been sent to your email address');
      resetForm();
      navigate('/signin');
    } else {
      toast.error('The email is incorrect');
    }
  };
  return (
    <>
      <Container>
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
                  <Title>Forgot your password</Title>
                  <Descriptions>
                    We will send you an email with recovery instructions
                  </Descriptions>
                  <InputWrapper>
                    <label htmlFor="email"></label>
                    <Input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="E-mail"
                    />
                    <ErrorMessage name="email" component="div" />
                  </InputWrapper>
                  <ButtonWrapper>
                    <Button type="submit">Send</Button>
                  </ButtonWrapper>
                  <RedirectionWrapper>
                    <Redirection>Do you already have an account?</Redirection>
                    <RedirectionLink to="/signin">Sign in</RedirectionLink>
                  </RedirectionWrapper>
                </FormikFieldsWrapper>
              </StepWrapper>
            </Form>
          ) : (
            <Loader />
          )}
        </Formik>
      </Container>
    </>
  );
};
