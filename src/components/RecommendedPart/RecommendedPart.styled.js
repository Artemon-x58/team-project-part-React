import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1440px) {
    max-width: 676px;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: #ffffff;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 182px;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3498db;
    background-color: rgba(15, 15, 15, 0.9);
    /* border-radius: 3px; */
  }

  &::-webkit-scrollbar-track {
    background-color: #050505;
  }

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    height: 192px;
  }
`;



export const WraperLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 6px;
  cursor: pointer;
`;

export const StyledLink = styled.button`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: #b6b6b6;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 1.37;
  }
`;

export const SvgRight = styled.svg`
  transform: rotate(180deg) rotate(0deg);
  width: 16px;
  height: 16px;
`;