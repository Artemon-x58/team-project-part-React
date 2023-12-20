import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1372px;
  margin: 20px auto 60px auto;

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

  @media screen and (min-width: 834px) {
    padding-left: 27px;
  }
`;

export const Wrapper = styled.div`
  width: 1300px;
  margin: 16px 0 0 116px;
  display: flex;
  justify-content: center;
  column-gap: 44px;

  @media screen and (min-width: 834px) {
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
`;

export const List = styled.ul`
  width: 730px;
  height: 510px;
  overflow-y: scroll;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;

  @media screen and (min-width: 834px) {
    width: auto;
    justify-content: center;
    gap: 20px;
  }
`;
