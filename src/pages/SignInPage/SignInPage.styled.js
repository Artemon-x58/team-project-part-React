import { Field } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StepWrapper = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: start;
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
  @media screen and (min-width: 1440px) {
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
  @media screen and (min-width: 1440px) {
    margin-top: 80px;
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
  position: relative;
  margin-bottom: 40px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }
  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 14px;
  top: 71px;
  cursor: pointer;
  opacity: 0;

  &:hover {
    opacity: 1;
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

  &.hasError {
    border: 1px solid #e74a3b;
  }

  &.hasSuccess {
    border: 1px solid #3cbc81;
  }

  @media screen and (min-width: 834px) {
    max-width: 358px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 191px;
  }

  &:placeholder {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: #b6b6b6;
  }

  &:hover + ${IconWrapper} {
    opacity: 1;
  }
`;

export const StyledErrorMessage = styled.div`
  color: #e74a3b;
  padding-left: 10px;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  margin-top: -16px;
  margin-bottom: 4px;
`;

export const SuccessfullyMessagesEmail = styled.div`
  /* position: absolute;
  top: 40px;
  left: 0;
  margin-bottom: 4px;
  padding-left: 10px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; */
  color: #3cbc81;
  padding-left: 10px;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  margin-top: -16px;
  margin-bottom: 4px;
`;

export const SuccessfullyMessagesPassword = styled.div`
  /* position: absolute;
  bottom: -18px;
  left: 0;
  padding-left: 10px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; */
  color: #3cbc81;
  padding-left: 10px;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  margin-top: -16px;
  margin-bottom: 4px;
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 54px;
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 222px;
  }
  @media screen and (min-width: 1440px) {
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
  @media screen and (min-width: 1440px) {
    width: 212px;
  }
  &:hover {
    background: rgba(227, 255, 168, 0.8);
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

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
  &:hover {
    color: rgba(182, 182, 182, 0.8);
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

  &:hover {
    color: rgba(182, 182, 182, 0.8);
  }
`;
