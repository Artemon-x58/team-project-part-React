import styled from 'styled-components';

export const StepWrapper = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 296px;
  margin-bottom: 24px;
  @media screen and (min-width: 834px) {
    max-width: 380px;
    height: 376px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 592px;
    height: 588px;
    margin: 0 104px 0 0;
  }
`;
export const FormikFieldsWrapper = styled.div`
  @media screen and (min-width: 834px) and (max-width: 1199px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
export const Title = styled.h2`
  color: white;

  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 16px;
  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`;
export const Descriptions = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #b6b6b6;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
    max-width: 428px;
  }
`;
