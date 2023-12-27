import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const UserName = styled.p`
  max-width: 78px;

  margin-right: 6px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  color: #fff;
  @media screen and (min-width: 834px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
export const AvatarWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 4px;
  border-radius: 50%;
  overflow: hidden;
  @media screen and (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`;
export const SettingWrapper = styled.div``;
export const OpenSettingBtn = styled.button`
  width: 14px;
  height: 14px;
  border: none;
  background: none;

  svg {
    width: 100%;
    height: 100%;
    transform: ${({ $isOpen }) =>
      $isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.3s ease;
  }
`;
export const SettingMenu = styled.div`
  position: absolute;
  top: 90%;
  right: 0;
  z-index: 1;
  padding: 24px;

  width: 110px;
  height: 64px;

  border-radius: 12px;
  background: #0f0f0f;
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
`;

export const SettingBtn = styled.button`
  display: flex;
  gap: 8px;
  background: none;
  border: none;
  height: 20px;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  svg {
    width: 16px;
    height: 16px;
  }
  span {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    color: white;
  }
`;
