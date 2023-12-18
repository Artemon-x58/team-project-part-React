import styled from 'styled-components';

export const FoodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;

  border: solid 1px green;
`;

export const FoodTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 1.33;
  color: #fff;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    letter-spacing: 1.45;
  }
`;

export const InfoBox = styled.div`
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  border-radius: 12px;
  background-color: rgba(15, 15, 15, 1);

  @media screen and (min-width: 834px) {
    padding: 36px 40px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 40px;
  }
`;

export const MainChartBox = styled.div`
  width: 168px;
  height: 168px;
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const Card = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ChartBox = styled.div`
  width: 48px;
  height: 48px;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

export const CardTitle = styled.h4`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.33;
  color: #fff;
`;

export const CounterList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const Counter = styled.p`
  display: flex;
  gap: 4px;
  width: calc((100% - 12px) / 2);
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1.42;
  color: #fff;

  & > span {
    color: #b6b6b6;
  }
`;
