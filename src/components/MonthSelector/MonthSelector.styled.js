import Select from 'react-select';
import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSelect = styled(Select)`
position: relative;
  width: 140px;
`;

export const CurrentMonth = styled.p`
  color: #FFFFFF;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 1.33;
`;

export const ChoiceMonth = styled.p`
position: absolute;
color: #FFFFFF;
font-size: 30px;
font-style: normal;
font-weight: 500;
line-height: 1.2;
`;
export const Container = styled.div`
display: flex;
align-items: center;
`;

export const Holder = styled.div`
display: flex;
`;

export const ArrowIcon = styled.svg`
margin-right: 12px;
width: 24px;
height: 24px;
`;



