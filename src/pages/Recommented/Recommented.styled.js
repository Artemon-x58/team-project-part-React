import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1372px;
  @media screen and (min-width: 320px) and (max-width: 833px) {
    max-width: 320px;
    margin: 0 auto;
  }

  @media screen and (min-width: 834px) {
    max-width: 834px;
  }
`;
export const Title = styled.h2`
  color: #fff;

  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  @media screen and (min-width: 320px) and (max-width: 833px) {
    font-size: 24px;
    padding-left: 10px;
    padding-top: 16px;
  }
  @media screen and (min-width: 834px) and (max-width: 1440px) {
    padding-left: 27px;
  }
`;

export const Wrapper = styled.div`
  width: 1300px;
  margin: 16px 0 0 116px;
  display: flex;
  justify-content: center;
  column-gap: 44px;

  @media screen and (min-width: 320px) and (max-width: 833px) {
    max-width: 320px;
    margin: 0;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
  }

  @media screen and (min-width: 834px) and (max-width: 1440px) {
    max-width: 834px;
    margin: 0;
    row-gap: 24px;
    flex-direction: column;
    align-items: center;
  }
`;

export const IllustrationImg = styled.img`
  width: 538px;
  height: 560px;

  @media screen and (min-width: 320px) and (max-width: 833px) {
    width: 100%;
    height: 310px;
  }
`;

export const List = styled.ul`
  width: 730px;
  height: 510px;
  overflow-y: scroll;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    /* background-color: #3498db; */
    background-color: rgba(15, 15, 15, 0.9);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #050505;
  }
  @media screen and (min-width: 320px) and (max-width: 833px) {
    max-width: 320px;
    height: auto;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 834px) and (max-width: 1440px) {
    width: auto;
    justify-content: center;
    gap: 20px;
  }
`;
