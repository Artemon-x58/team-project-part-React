import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 24px;
  gap: 20px;
  border-radius: 12px;
  background: #0f0f0f;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`;

export const Img = styled.img`
  width: 46px;
  height: 46px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  
  & > span {
   font-size: 14px;
    font-weight: 500;
    line-height: 1.42;
    padding-left: 6px;
    color: #b6b6b6;
  }
`;
