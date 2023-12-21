import styled from 'styled-components';
import { Field } from 'formik';
import { Link } from 'react-router-dom';

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
  margin-bottom: 48px;
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 206px;
  }
  @media screen and (min-width: 1200px) {
    align-items: start;
    margin-bottom: 168px;
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
export const ButtonBack = styled(Button)`
  margin-top: 5px;
  background: none;
  color: white;
`;
//---------------------step2--------------------//
export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  @media screen and (min-width: 834px) and (max-width: 1199px) {
    flex-direction: row;
  }
`;
export const StyledLable = styled.label`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: white;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 834px) and (max-width: 1199px) {
    &:not(:last-child) {
      margin: 0 24px 0 0;
    }
  }
  @media screen and (min-width: 1200px) {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const StyledField = styled(Field)`
  margin: 0 8px 0 0;
`;
//---------------------step3--------------------//
export const RadioWrapperGender = styled.div`
  margin-bottom: 24px;
  @media screen and (min-width: 834px) and (max-width: 1199px) {
    display: flex;
    flex-wrap: wrap;
    text-align: start;
    width: 100%;
    max-width: 380px;
  }
`;
export const TitleGender = styled.p`
  width: 100%;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: white;
  margin-bottom: 12px;
`;

export const StyledLableGender = styled.label`
  display: inline-block;
  width: 136px;
  color: white;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  &:not(:last-child) {
    margin-right: 16px;
  }
`;
export const WrapperAge = styled.div`
  width: 100%;
  max-width: 380px;
  text-align: start;
`;
export const StyledAgeLabel = styled.label`
  display: block;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: white;
  margin-bottom: 40px;

  input {
    margin-top: 12px;
  }
`;

export const GenderRadioField = styled(Field)`
  margin: 0 8px 0 0;
`;
//---------------------step4--------------------//
export const WrappperBodyParams = styled(WrapperAge)`
  margin-bottom: 40px;
`;
export const StyledBodyParamsLabel = styled(StyledAgeLabel)`
  margin-bottom: 0;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
//---------------------step5--------------------//
export const ActivityLabel = styled(StyledAgeLabel)`
  margin: 0;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  input {
    margin: 0 8px 0 0;
  }
`;
export const ActivityWrapper = styled(WrappperBodyParams)``;

export const RedirectionWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
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
