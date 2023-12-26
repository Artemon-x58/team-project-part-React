import styled from 'styled-components';

export const ContainerSelect = styled.div``;

export const WrapperSelect = styled.div`
  position: absolute;

  z-index: 200;
  display: flex;
  gap: 8px;
  width: 212px;
  max-height: 144px;
  flex-direction: column;
  background-color: #0f0f0f;
  padding-top: 8px;
  overflow-y: scroll;
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  border-radius: 12px;
  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  scrollbar-color: #333 transparent;
  scrollbar-width: thin;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperBtnAndIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const LabelSelect = styled.label`
  color: white;

  display: flex;

  justify-content: start;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;

  &:hover {
    color: #e3ffa8;
    background-color: rgba(255, 255, 255, 0.03);
  }
`;

export const InputSelect = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 0;
  height: 0;
  border-radius: 50%;
  border: none;
  outline: none;
`;

export const ButtonSelect = styled.button`
  margin-right: 12px;
  color: white;
  background-color: inherit;
  border: none;

  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`;

export const TextSelect = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
  color: white;
`;

export const SvgSelectDown = styled.svg`
  width: 16px;
  height: 16px;
  transform: ${({ $isdropdownopen }) =>
    $isdropdownopen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.3s ease;
`;

export const UseSelect = styled.use``;

export const SvgSelectLeft = styled.svg`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;
