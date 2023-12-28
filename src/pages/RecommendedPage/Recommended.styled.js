import styled from 'styled-components';

export const Title = styled.h2`
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;
  margin-right: auto;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 44px;
  }
`;

export const IllustrationImg = styled.img`
  width: 280px;
  height: auto;

  @media screen and (min-width: 320px) {
    width: 300px;
    height: 312px;
  }

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 396px;
  }

  @media screen and (min-width: 1440px) {
    width: 536px;
    height: 560px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  height: 510px;
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #292928;
    border-radius: 6px;
  }

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 786px;
  }

  @media screen and (min-width: 1440px) {
    width: 682px;
  }
`;
