import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
