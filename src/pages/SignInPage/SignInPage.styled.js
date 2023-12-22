import { Field } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StepWrapper = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 296px;
  margin-bottom: 24px;
  @media screen and (min-width: 834px) {
    max-width: 380px;
    height: 376px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 592px;
    height: 588px;
    margin: 0 104px 0 0;
  }
`;
export const FormikFieldsWrapper = styled.div`
  @media screen and (min-width: 834px) and (max-width: 1199px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
export const Title = styled.h2`
  color: white;

  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 16px;
  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`;
export const Descriptions = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #b6b6b6;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
    max-width: 428px;
  }
`;
export const InputWrapper = styled.div`
  margin-bottom: 40px;
  @media screen and (min-width: 834px) {
    width: 380px;
  }
  @media screen and (min-width: 1200px) {
    width: 212px;
  }
`;
export const Input = styled(Field)`
  display: block;
  width: 100%;
  max-width: 280px;
  height: 20px;
  padding: 8px 10px;

  background: inherit;
  border-radius: 12px;
  border: 1px solid #e3ffa8;

  font-family: inherit;
  color: #b6b6b6;
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 834px) {
    max-width: 358px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 191px;
  }

  &:placeholder {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: #b6b6b6;
  }
`;
export const ButtonWrapper = styled.div`
  margin-bottom: 54px;
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 222px;
  }
  @media screen and (min-width: 1200px) {
    align-items: start;
    margin-bottom: 184px;
  }
`;
export const Button = styled.button`
  width: 300px;
  height: 36px;
  padding: 8px 10px;
  border: none;
  border-radius: 12px;
  background: #e3ffa8;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: black;
  @media screen and (min-width: 834px) {
    width: 380px;
  }
  @media screen and (min-width: 1200px) {
    width: 212px;
  }
`;
export const ForgotLink = styled(Link)`
  display: inline-block;
  width: 300px;
  font-weight: 400;
  margin-top: 14px;
  background: none;
  color: #b6b6b6;
  margin-top: 14px;
  text-align: center;

  @media screen and (min-width: 834px) {
    width: 380px;
    margin-top: 20px;
  }

  @media screen and (min-width: 1200px) {
    width: 212px;
  }
`;

export const ButtonBack = styled(Button)`
  font-weight: 400;
  margin-top: 14px;
  background: none;
  color: white;
  @media screen and (min-width: 834px) {
    margin-top: 20px;
  }
`;

export const RedirectionWrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const Redirection = styled.p`
  color: #b6b6b6;
  margin-right: 20px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  @media screen and (min-width: 834px) {
    margin-right: 16px;
  }
`;
export const RedirectionLink = styled(Link)`
  color: white;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
