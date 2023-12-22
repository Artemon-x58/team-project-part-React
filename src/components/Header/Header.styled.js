import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Styledheader = styled.header`
  background-color: #0f0f0f;
`;
export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  justify-content: space-between;
  height: 26px;
  margin-bottom: 24px;
  padding: 17px 0;

  @media screen and (min-width: 834px) {
    height: 32px;
    margin-bottom: 40px;
    padding: 34px 0;
  }
`;

export const LogoLink = styled(Link)`
  width: 102px;
  text-align: end;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;

  color: rgba(182, 182, 182, 1);

  &:hover {
    color: rgba(182, 182, 182, 0.8);
  }
  @media screen and (min-width: 834px) {
    width: 140px;
    font-size: 22px;
    line-height: 32px;
  }
`;
export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  color: rgba(255, 255, 255, 1);
`;
