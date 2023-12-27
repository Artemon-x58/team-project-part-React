import { Field } from 'formik';
import styled from 'styled-components';

export const MobileMenuWrapper = styled.div`
  width: 192px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const OpenMenuBtn = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  background: none;

  svg {
    width: 100%;
    height: 100%;
    transform: ${({ $isOpen }) =>
      $isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.3s ease;
  }
`;

export const MobileMenu = styled.div`
  z-index: 1;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  width: 300px;
  height: 184px;

  border-radius: 12px;
  background: #0f0f0f;
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
`;
export const CardMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
  width: 252px;
  height: 136px;
  padding: 24px;
`;

export const CardItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const ImgWrapper = styled.div`
  width: 26px;
  height: 26px;
  padding: 10px;
  margin-right: 16px;

  border-radius: 12px;
  border: 1px solid #5f5e5c;
  background: rgba(255, 255, 255, 0.01);
  img {
    width: 100%;
    height: 100%;
  }
`;
export const Wrapper = styled.div`
  max-width: 120px;
`;
export const Title = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  color: #fff;
`;
export const Value = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: #fff;
`;
export const Goal = styled.span`
  margin-right: 12px;
`;
export const Weight = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: white;
`;
export const Mark = styled(Weight)`
  margin: 0 6px 0 4px;
  font-weight: 400;
  color: #b6b6b6;
`;
export const CloseBtn = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  width: 16px;
  height: 16px;
  background: none;
  border: none;

  svg {
    width: 100%;
    height: 100%;
  }
`;
export const EditWeightBtn = styled(OpenMenuBtn)`
  width: 16px;
  height: 16px;
`;

export const GoalMenu = styled.div`
  position: absolute;
  z-index: 2;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  width: 300px;
  height: 333px;

  background: #0f0f0f;
  h2 {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    color: white;
    margin-bottom: 8px;
  }
`;
export const Subtitle = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: #b6b6b6;
  max-width: 284px;
  margin-bottom: 16px;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  cursor: pointer;
`;
export const StyledFields = styled(Field)`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;
export const Span = styled.span`
  width: 18px;
  height: 18px;
  padding: 10px;
  display: block;
  border-radius: 12px;
  border: 1px solid #292928;
  background: rgba(255, 255, 255, 0.01);
`;
export const Name = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: white;
`;
export const Descriptions = styled.p`
  display: flex;
  gap: 12px;
  align-items: center;

  ${StyledFields}:checked + & {
    ${Span} {
      border: 1px solid #b6c3ff;
    }
    ${Name} {
      font-weight: 500;
      color: #b6c3ff;
    }
  }
`;
export const ButtonWrapper = styled.div``;
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
export const ButtonBack = styled(Button)`
  margin-top: 5px;
  background: none;
  color: white;
`;
//-------------------------------------//
export const WeightMenu = styled.div`
  position: absolute;
  z-index: 2;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  width: 300px;
  height: 236px;
  padding-top: 24px;

  background: #0f0f0f;
  h2 {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    color: white;
    margin-bottom: 8px;
  }
`;
export const DateWrapper = styled.div`
  margin-bottom: 20px;
`;
export const CurrentDate = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: white;
  margin-right: 6px;
`;
export const ValueDate = styled(CurrentDate)`
  font-weight: 500;
  color: #b6b6b6;
`;

export const InputWrapper = styled.div`
  margin-bottom: 12px;
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
`;
