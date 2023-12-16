import styled from 'styled-components';

export const StyledSharedLayout = styled.div`
  max-width: 320px;
  margin: 10px auto;

  @media screen and (min-width: 834px) {
    max-width: 834px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1440px;
  }
`;
