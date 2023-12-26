import styled from 'styled-components';

export const DashboardSection = styled.section`
  background-color: '#050505';
  color: rgba(255, 255, 255, 1);
  font-family: 'Poppins', sans-serif;
`;

export const DashboardContainer = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 320px) {
    width: 320px;
    padding: 16px 10px 60px;
  }
  @media screen and (min-width: 834px) {
    width: 834px;
    padding: 24px 27px 60px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 20px 34px 40px;
  }
`;

export const LineChartBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  margin-bottom: 27px;

  @media screen and (min-width: 834px) {
    gap: 40px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: baseline;
    gap: 20px;
    margin-bottom: 20px;
  }
`;

export const ChartGrid = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
  }
  @media screen and (min-width: 834px) {
    display: inline-block;
    overflow-x: hidden;
  
  }
`;

export const ScaleChartBlock = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
  }
  @media screen and (min-width: 834px) {
    overflow-x: hidden;
  }
`;
