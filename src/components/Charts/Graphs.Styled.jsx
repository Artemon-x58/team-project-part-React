import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;

export const GraphsTitle = styled.h2`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.44;
  margin-right: auto;
  color: #ffffff;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
    margin-right: 40px;
  }
`;

export const GraphsSubtitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  margin-right: 8px;
  color: #ffffff;
  & > span {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #b6b6b6;
  }
`;

export const ContainerGraph = styled.div`
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: calc((100% - 20px) / 2);
  }
`;

export const Graph = styled.div`
  position: relative;
  padding: 25px 20px 44px 14px;
  border-radius: 12px;
  margin-bottom: 8px;
  background-color: #0f0f0f;
  & canvas {
    padding: 0;
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (max-width: 833px) {
    width: 676px;
  }

  @media screen and (min-width: 834px) {
    padding-right: 31px;

    & canvas {
      padding: 0;
      min-height: 313px;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 1440px) {
    padding-right: 20px;

    & canvas {
      padding: 0;
      min-height: auto;
    }
  }
`;

export const GraphLabelBlock = styled.div`
  width: 86px;
  height: 76px;
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  border-radius: 8px;
  background-color: #0f0f0f;
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
`;

export const GraphLabelContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  padding: 8px 6px;

  & > p {
    font-size: 32px;
    font-weight: 500;
    line-height: 1.19;
  }

  & > span {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.43;
    color: '#B6B6B6';
  }
`;

export const Scale = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #0f0f0f;
  border-radius: 12px;
  padding: 24px 24px 36px;
  margin-bottom: 8px;

  @media screen and (max-width: 833px) {
    width: 1372px;
  }

  @media screen and (min-width: 834px) {
    max-width: 780px;
    padding: 24px 20px 44px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1372px;
    padding: 24px 24px 36px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;

export const Item = styled.li`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  text-align: center;

  &:not(:last-child) {
    margin-right: 13px;
  }
`;

export const WeightTitle = styled.p`
  color: '#ffffff';
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 10px;
    line-height: 1.6;
    margin-bottom: 12px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: 1.43;
    margin-bottom: 16px;
  }
`;
export const DataTitle = styled.p`
  font-size: 10px;
  line-height: 1.4;
  color: '#b6b6b6';
`;
