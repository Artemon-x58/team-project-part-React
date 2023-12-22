import styled from 'styled-components';

export const Container = styled.div`
  width: 676px;
  height: 278px;

  @media screen and (min-width: 320px) and (max-width: 833px) {
    width: 300px;
    height: auto;
    margin: 0 auto;
  }

  @media screen and (min-width: 835px) and (max-width: 1200px) {
    margin: 0 auto;
    width: 780px;
    height: 278px;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;

  @media screen and (min-width: 320px) and (max-width: 833px) {
    color: Color-Primary-White;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const List = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media screen and (min-width: 835px) and (max-width: 1200px) {
    & > li {
      width: 360px;
    }
  }
`;

export const Btn = styled.button`
  width: 100px;
  height: 22px;
  margin-top: 16px;
  background: none;
  border: none;
  cursor: pointer;

  color: #b6b6b6;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;
