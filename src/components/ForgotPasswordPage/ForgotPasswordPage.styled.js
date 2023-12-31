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
  margin-bottom: 40px;
  @media screen and (min-width: 834px) {
    width: 380px;
  }
  @media screen and (min-width: 1440px) {
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
`;
export const StyledErrorMessage = styled.div`
  color: #e74a3b;
  padding-left: 10px;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  margin-top: -16px;
  margin-bottom: -18px;
`;
export const ButtonWrapper = styled.div`
  margin-bottom: 56px;
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 286px;
  }
  @media screen and (min-width: 1440px) {
    align-items: start;
    margin-bottom: 248px;
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
`;

export const RedirectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  @media screen and (min-width: 834px) {
    flex-direction: row;
    max-width: 380px;
  }
`;
export const Redirection = styled.p`
  color: #b6b6b6;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
export const RedirectionLink = styled(Link)`
  color: white;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
