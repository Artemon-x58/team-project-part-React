import {
  Descriptions,
  FormikFieldsWrapper,
  ImageWrapper,
  StepWrapper,
  Title,
} from './StepSignUp.styled';

export const StepSignUp = ({ image, title, description, children }) => {
  return (
    <StepWrapper>
      <ImageWrapper>
        <img src={image} alt="avatar" />
      </ImageWrapper>
      <FormikFieldsWrapper>
        <Title>{title}</Title>
        <Descriptions>{description}</Descriptions>
        <>{children}</>
      </FormikFieldsWrapper>
    </StepWrapper>
  );
};
