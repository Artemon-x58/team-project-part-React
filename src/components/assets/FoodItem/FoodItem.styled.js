import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;

  width: 328px;
  height: 86px;
  padding-left: 20px;
  column-gap: 20px;
  border-radius: 12px;
  background: #0f0f0f;

  @media screen and (min-width: 320px) and (max-width: 833px) {
    width: 300px;
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
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const Text = styled.p`
  color: #fff;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const TextGrey = styled.span`
  padding-left: 6px;
  color: #b6b6b6;
`;
