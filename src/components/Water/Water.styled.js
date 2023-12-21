import styled from 'styled-components';

export const Main = styled.div`
  color: #fff;
`;

export const Title = styled.h2`
  margin-bottom: 6px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;

  @media screen and (min-width: 834px) {
    font-size: 22px;
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  max-width: 300px;
  max-height: 212px;
  flex-shrink: 0;
  border-radius: 12px;
  background-color: #0f0f0f;
  padding: 16px 12px;

  @media screen and (min-width: 834px) {
    max-width: 380px;
    height: 192px;
    padding: 24px 22px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 444px;
    padding: 24px 40px;
  }
`;

export const Subtitle = styled.h3`
  margin-bottom: 12px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;

  @media screen and (min-width: 834px) {
    font-size: 18px;
  }
`;

export const Value = styled.p`
  display: flex;
  align-items: center;
  column-gap: 4px;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;

  @media screen and (min-width: 834px) {
    font-size: 32px;
  }
`;

export const ValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    align-items: center;
    column-gap: 40px;
  }
`;

export const Left = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
`;

export const Unit = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #b6b6b6;
`;

export const WaterInfo = styled.div`
  display: flex;
  column-gap: 20px;

  @media screen and (min-width: 834px) {
    column-gap: 40px;
  }
`;

export const WaterInfoWrapper = styled.div`
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    /* margin-top: 57px; */
  }
`;

export const PercentageContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  height: 176px;
  width: 80px;
  padding: 8px 0;
  position: relative;
  background-color: #050505;
  border-radius: 8px;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid #292928;
`;

export const PercentageFill = styled.div`
  order: 1;
  width: 64px;
  height: ${props => Math.min(props.percentage, 100)}%;
  background-color: #b6c3ff;
  border-radius: 20px;
  box-shadow: 0px 4px 8px 0px rgba(255, 255, 255, 0.12),
    0px 4px 8px 0px rgba(0, 0, 0, 0.12) inset;
  transition: height 0.5s ease-in-out;
`;

export const PercentageText = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.3;
  color: #b6c3ff;
`;
