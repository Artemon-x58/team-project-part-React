import styled from 'styled-components';

export const ModalContentWrapper = styled.div`
  width: 278px;
  text-align: center;
`;
export const Title = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: white;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  width: 80%;
  height: 36px;
  padding: 8px 10px;
  border: none;
  border-radius: 12px;
  background: rgb(227 255 168);

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: black;

  &:hover {
    background: rgba(227, 255, 168, 0.8);
  }
`;
export const ButtonBack = styled(Button)`
  margin-top: 5px;
  background: none;
  color: white;
  &:hover {
    background: rgba(227, 255, 168, 0.8);
  }
`;
