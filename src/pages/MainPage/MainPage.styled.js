import styled from 'styled-components';

export const WraperLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  color: #fff;

  @media screen and (min-width: 834px) {
    margin-bottom: 24px;
  }
`;
export const SvgRight = styled.svg`
  transform: rotate(180deg) rotate(0deg);
  width: 16px;
  height: 16px;
`;

export const ConteinerRecommended = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    flex-direction: row;
  }
`;

export const Topic = styled.h1`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25; /* 125% */

  @media screen and (min-width: 834px) {
    font-size: 30px;
  }
`;

export const StyledLink = styled.button`
  margin-right: 6px;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
  color: #b6b6b6;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 834px) {
    font-size: 16px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
  }
`;

export const FoodWrapepr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 80px;

  @media screen and (min-width: 1440px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;
