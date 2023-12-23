import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

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

export const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const MainHeaderBlock = styled.div`
  position: relative;
  display: flex;
`;

// export const BackLink = styled(NavLink)`
//   display: flex;
//   @media screen and (min-width: 320px) {
//     margin-right: 8px;
//   }
//   @media screen and (min-width: 834px) {
//     margin-right: 12px;
//   }
// `;

export const ArrowReturn = styled.img`
  @media screen and (min-width: 320px) {
    width: 16px;
  }
  @media screen and (min-width: 834px) {
    width: 24px;
  }
`;

export const Header = styled.h1`
  font-weight: 500;

  @media screen and (min-width: 320px) {
    font-size: 24px;
    line-height: 1.25;
  }
  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;

export const Button = styled.button`
  margin-left: 12px;
  padding: 0;
  border: none;
  background-color: inherit;
  color: inherit;
`;

export const ToggleButton = styled.button`
  position: absolute;
  background-color: '#0F0F0F';
  border: none;
  padding: 16px 0 16px 12px;
  border-radius: 12px;
  box-shadow: 0px 4px 14px 0px #e3ffa833;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  text-align: left;
  color: inherit;
  z-index: 1000;

  @media screen and (min-width: 320px) {
    top: 32px;
    left: 24px;
    width: 188px;
    height: 52px;
    font-size: 16px;
    line-height: 1.38;
  }
  @media screen and (min-width: 834px) {
    top: 40px;
    left: 36px;
    width: 212px;
    height: 64px;
    font-size: 22px;
    line-height: 1.45;
  }
`;

export const Arrow = styled.img`
  width: 16px;
  height: 16px;
`;

export const SecondHeader = styled.h3`
  font-weight: 500;

  @media screen and (min-width: 320px) {
    font-size: 16px;
    line-height: 1.38;
  }
  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const LineChartBlock = styled.div`
  display: flex;
  @media screen and (min-width: 320px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
  }
`;

export const ChartGrid = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    &:not(:last-child) {
      margin-bottom: 27px;
    }
  }
  @media screen and (min-width: 834px) {
    display: inline-block;
    overflow-x: hidden;
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
`;

export const ScaleChartBlock = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    margin-top: 27px;
  }
  @media screen and (min-width: 834px) {
    margin-top: 40px;
    overflow-x: hidden;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 20px;
  }
`;
