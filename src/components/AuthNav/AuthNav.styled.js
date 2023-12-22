import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNavWrapper = styled.div`
  display: flex;
  align-items: center;
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
export const Slash = styled.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  color: white;
`;
