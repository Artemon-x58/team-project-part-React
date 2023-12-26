import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 10px;
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 27px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 0 34px;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 300px;
  height: 296px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    max-width: 380px;
    height: 376px;
    margin-bottom: 80px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 592px;
    height: 588px;
    margin: 0 104px 0 0;
  }
`;
export const ContentWrapper = styled.div`
  @media screen and (min-width: 834px) {
    width: 444px;
  }
`;
export const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  color: #fff;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

export const Description = styled.p`
  margin-bottom: 24px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #b6b6b6;
  @media screen and (min-width: 834px) {
    padding: 0px 16px;
    font-size: 22px;
    line-height: 32px;
    text-align: center;
  }
  @media screen and (min-width: 1440px) {
    text-align: left;
    padding: 0 28px 0 0;
  }
`;

export const AuthLinkWrapper = styled.div`
  margin-bottom: 40px;
  @media screen and (min-width: 834px) {
    margin-bottom: 80px;
    text-align: center;
  }
  @media screen and (min-width: 834px) {
    text-align: left;
  }
`;

export const AuthLink = styled(Link)`
  display: inline-block;
  width: 122px;
  padding: 8px 10px;

  border-radius: 12px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  &:last-child {
    color: white;
  }
  &:not(:last-child) {
    background: #e3ffa8;
    margin-right: 16px;
  }
  @media screen and (min-width: 834px) {
    &:not(:last-child) {
      width: 192px;
    }
  }
  &:hover {
    background: rgba(227, 255, 168, 0.8);
  }
`;

export const PossibilityList = styled.ul`
  color: white;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) and (max-width: 1199px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 16px;
  }

  li {
    &::before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      margin-right: 8px;

      border-radius: 50%;
      background: #e3ffa8;
    }
    @media screen and (max-width: 834px) {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
    @media screen and (min-width: 1440px) {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
`;
