import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

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
  StyledErrorMessage,
} from './ChangePasswordPage.styled';
import { changePassword } from 'redux/auth/authOperations';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { Loader } from '../../components/Loader/Loader';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must contain more than 6 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]*$/,
      'Password must contain at least one uppercase letter and one digit'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('ConfirmPassword is required'),
});

export const ChangePasswordPage = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { search } = useLocation();

  const query = queryString.parse(search);

  const initialValues = {
    password: '',
    confirmPassword: '',
  };
  const handleSubmit = async ({ password }, { resetForm }) => {
    const { meta } = await dispatch(changePassword({ ...query, password }));
    console.log(meta);

    if (meta.requestStatus === 'fulfilled') {
      toast.success('Password reset successfully');
      resetForm();
      navigate('/signin');
    } else {
      toast.error('Something went wrong. Try again');
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
              <Title>New Password</Title>
              <Descriptions>
                Pleace create a new password that you don't use on only other
                site
              </Descriptions>
              <InputWrapper>
                <label htmlFor="password"></label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component={StyledErrorMessage} />
                <label htmlFor="confirmPassword"></label>
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component={StyledErrorMessage}
                />
              </InputWrapper>
              <ButtonWrapper>
                <Button type="submit">Change</Button>
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
