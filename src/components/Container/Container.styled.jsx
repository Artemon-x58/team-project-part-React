import styled from 'styled-components';

export const Container = styled.div`
  max-width: 320px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;

  @media screen and (min-width: 834px) {
    max-width: 780px;
    padding-left: 27px;
    padding-right: 27px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1372px;
    padding-left: 34px;
    padding-right: 34px;
  }
`;
