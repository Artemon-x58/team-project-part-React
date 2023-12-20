import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const TargetSelect = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  width: 300px;
  height: 184px;

  border-radius: 12px;
  background: #0f0f0f;
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  @media screen and (min-width: 834px) {
    position: static;
  }
`;
export const CardMenuWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 310px;
  height: 48px;
  margin-right: 73px;
  @media screen and (min-width: 1200px) {
    width: 350px;
    margin-right: 124px;
  }
`;

export const CardItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 142px;

  &:not(:last-child) {
    margin-right: 40px;
  }
  @media screen and (min-width: 1200px) {
    &:not(:last-child) {
      margin-right: 80px;
    }
  }
`;
export const ImgWrapper = styled.div`
  width: 26px;
  height: 26px;
  padding: 10px;
  margin-right: 12px;

  border-radius: 12px;
  border: 1px solid #5f5e5c;
  background: rgba(255, 255, 255, 0.01);
  img {
    width: 100%;
    height: 100%;
  }
`;
export const Wrapper = styled.div`
  margin-right: 12px;
  width: 56px;
`;
export const Title = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  color: #fff;
`;
export const Value = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: #fff;
`;
export const Weight = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: white;
  margin-right: 4px;
`;
export const Mark = styled(Weight)`
  margin: 0 6px 0 4px;
  font-weight: 400;
  color: #b6b6b6;
`;
export const OpenMenuBtn = styled.button`
  width: 14px;
  height: 14px;
  border: none;
  background: none;

  svg {
    width: 100%;
    height: 100%;
  }
`;
export const EditWeightBtn = styled(OpenMenuBtn)`
  width: 16px;
  height: 16px;
`;
