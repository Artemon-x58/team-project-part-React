import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  max-width: 166px;
  padding: 8px 10px;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  background: #e3ffa8;
`;

export const IconAdd = styled.svg`
  stroke: #050505;
`;

export const ModalWrapper = styled.div`
  padding: 16px 12px;

  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 40px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;

  @media screen and (min-width: 834px) {
    font-size: 30px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 276px;

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 12px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const ModalInput = styled.input`
  margin-bottom: 32px;
  width: 250px;
  padding: 8px 10px;
  border-radius: 12px;
  background-color: #0f0f0f;
  color: #fff;
  border: 1px solid ${({ hasError }) => (hasError ? 'red' : '#e3ffa8')};

  &:focus-visible {
    outline: 1px solid ${({ hasError }) => (hasError ? 'red' : '#4670ed')};
    border: 1px solid ${({ hasError }) => (hasError ? 'red' : '#4670ed')};
  }

  &::placeholder {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: #b6b6b6;
  }

  &.hasError {
    border: 1px solid red;
  }

  @media screen and (min-width: 834px) {
    width: 190px;
  }
`;

export const ModalButtonConfirm = styled.button`
  margin-bottom: 16px;
  padding: 8px 10px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
  border-radius: 12px;
  border: none;
  background-color: #e3ffa8;
  color: #0f0f0f;
`;

export const ModalButtonCansel = styled.button`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  border: none;
  background: none;
  color: #b6b6b6;
`;

export const ErrorMessage = styled.div`
  position: absolute;
  bottom: 111px;
  color: red;
  font-size: 8px;
`;
