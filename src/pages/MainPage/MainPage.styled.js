import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Topic = styled.h1`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25; /* 125% */

  @media screen and (min-width: 834px) {
    font-size: 30px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
  color: #b6b6b6;

  @media screen and (min-width: 834px) {
    font-size: 16px;
  }
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

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1200px) {
    flex-wrap: nowrap;
  }
`;
