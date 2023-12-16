import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Styledheader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  margin-bottom: 24px;
  padding: 17px 10px;
  background-color: #0f0f0f;

  @media screen and (min-width: 834px) {
    margin-bottom: 40px;
    padding: 34px 27px;
  }
  @media screen and (min-width: 1200px) {
    padding: 34px;
  }
`;

export const LogoLink = styled(Link)`
  color: rgba(182, 182, 182, 1);

  &:hover {
    color: rgba(182, 182, 182, 0.8);
  }
  @media screen and (min-width: 834px) {
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
export const AuthNavLink = styled(NavLink)`
  color: white;

  &.active {
    color: #e3ffa8;
  }
  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  &:not(:last-child) {
    margin-right: 4px;
  }
  &:not(:first-child) {
    margin-right: 6px;
  }

  &:not(:first-child) {
    margin-left: 4px;
  }
  @media screen and (min-width: 834px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
