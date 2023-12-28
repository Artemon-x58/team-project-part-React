import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import { Modal } from '@mui/material';
export const ModalRecord = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(5, 5, 5, 0.8);
`;
export const MealWrapper = styled.div`
  max-height: 506px;
  width: 278px;
  border-radius: 12px;
  background: #0f0f0f;
  padding: 16px 12px 40px 12px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #292928;
    border-radius: 6px;
  }

  @media screen and (min-width: 834px) {
    width: 660px;
    max-height: 408px;
    padding: 24px;
  }
`;
export const FormikFieldsWrapper = styled.div`
  background: #0f0f0f;
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  @media screen and (min-width: 834px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const Title = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 24px;
  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const MealPart = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
  gap: 16px;
  @media screen and (min-width: 834px) {
    flex-direction: row;
    width: 660px;
    height: 38px;
    gap: 0;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const Input = styled(Field)`
  border-radius: 12px;
  border: ${({ err }) =>
    err === 'true' ? '1px solid #E74A3B' : '1px solid #e3ffa8'};
  background: #0f0f0f;
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: flex-start;
  width: ${({ isvalue }) =>
    isvalue === 'fat' || isvalue === 'calories' ? '100px' : '256px'};
  height: 20px;
  margin-right: ${({ isvalue }) =>
    isvalue === 'fat' || isvalue === 'calories' ? '8px' : '0'};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #b6b6b6;
  @media screen and (min-width: 834px) {
    margin-right: 12px;
    width: ${({ isvalue }) => {
      switch (isvalue) {
        case 'name':
          return '235px';
        case 'carbonoh':
          return '80px';
        case 'protein':
          return '66px';
        case 'fat':
          return '41px';
        case 'calories':
          return '58px';
        default:
          return 'auto';
      }
    }};
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 16px;
  @media screen and (min-width: 834px) {
    flex-direction: row;
    gap: 12px;
    justify-content: flex-end;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const ButtonConfirm = styled.button`
  width: 276px;
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 12px;
  background: #e3ffa8;
  color: #0f0f0f;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  @media screen and (min-width: 834px) {
    width: 192px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const ButtonCancel = styled.button`
  width: 256px;
  color: #b6b6b6;
  text-align: center;
  font-size: 14px;
  background: transparent;
  border: none;
  font-weight: 400;
  line-height: 20px;
  @media screen and (min-width: 834px) {
    width: 192px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const MealRecordWrap = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #e3ffa8;
  gap: 6px;
  background-color: inherit;
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 64px;
  width: 150px;
  @media screen and (min-width: 834px) {
    margin-bottom: 120px;
  }
`;
export const SmallWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const ErrorMsg = styled(ErrorMessage)`
  color: #e74a3b;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;
export const ErrorMsgSmall = styled(ErrorMessage)`
  color: #e74a3b;
  position: absolute;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  transform: translate(13%, 280%);
`;
export const ErrWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 834px) {
  }
`;
