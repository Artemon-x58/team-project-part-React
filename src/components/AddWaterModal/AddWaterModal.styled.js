import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  width: 100%;
  padding: 8px 10px;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  background: #e3ffa8;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 212px;
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
  width: 190px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid #e3ffa8;
  background-color: #0f0f0f;
  color: #fff;

  &::placeholder {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: #b6b6b6;
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
