import styled from 'styled-components';

export const Main = styled.div`
  color: #fff;
`;

export const Title = styled.h2`
  margin-bottom: 6px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;

  @media screen and (min-width: 834px) {
    font-size: 22px;
  }
`;

export const Body = styled.div`
  max-width: 300px;
  max-height: 212px;
  border-radius: 12px;
  background-color: #0f0f0f;
  padding: 16px 12px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 192px;
    padding: 24px 40px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  margin-bottom: ${({ first }) => (first ? '32px' : '0')};
`;

export const Subtitle = styled.h3`
  margin-bottom: 4px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
  color: #b6b6b6;
`;

export const Value = styled.p`
  display: flex;
  align-items: center;
  column-gap: 4px;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.1;
`;

export const Unit = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #b6b6b6;
`;
