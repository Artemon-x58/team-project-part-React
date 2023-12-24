import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const ProfileTitle = styled.h1`
  margin-top: 16px;
  margin-left: 10px;
  margin-bottom: 16px;
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  @media (min-width: 834px) {
    margin-top: 24px;
    margin-left: 27px;
    font-size: 30px;
    font-weight: 500;
    line-height: 1.2;
  }
`;

export const SetImage = styled.img`
  width: 297px;
  height: 296px;
  margin-left: 10px;
  @media (min-width: 834px) {
    margin-left: 200px;
    width: 376px;
    height: 374px;
  }
  @media screen and (min-width: 1440px) {
    width: 530px;
    height: 528px;
    margin-left: 150px;
  }
`;
export const ParametrsDesc = styled.section`
  @media (min-width: 834px) {
    margin-left: 172px;
  }
`;
export const ProfileDescContainer = styled.div`
  @media (min-width: 834px) {
    display: flex;
    gap: 60px;
  }
`;

export const NameCont = styled.div``;

export const ProfileYourName = styled.p`
  margin-top: 24px;
  margin-left: 10px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  @media (min-width: 834px) {
    order: 1;
  }
`;

export const ProfileNameInput = styled(Field)`
  order: 1;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  margin-left: 10px;
  margin-top: 12px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid #b6b6b6;
  background-color: #0f0f0f;
`;
export const ProfileDescName = styled.p`
  margin-top: 40px;
  margin-left: 10px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
`;

export const PhotoDescContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileDescImage = styled.img`
  margin-left: 10px;
  margin-right: 12px;
  margin-top: 12px;
  width: 28px;
  height: 28px;
  object-fit: cover;
  border-radius: 50%;
`;
export const ProfilePhotoLabel = styled.label`
  margin-left: 6px;
  width: 165px;
  margin-top: 20px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
`;

export const ProfileDownloadDesc = styled.p`
  margin-left: 6px;
  width: 280px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  @media (min-width: 834px) {
    width: 444px;
  }
`;

export const GenderContainer = styled.div`
  order: 4;
  margin-top: 12px;
  display: flex;
  align-items: center;
`;

export const GenderInput = styled(Field)`
  margin-left: 10px;
  width: 12px;
  height: 12px;
`;

export const GenderDesc = styled.p`
  margin-left: 6px;
  margin-right: 16px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
`;

export const ActivityDescName = styled.div`
  margin-top: 40px;
  margin-bottom: 12px;
  margin-left: 10px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  @media (min-width: 834px) {
    margin-left: 182px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 866px;
  }
`;

export const ProfileActivityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  @media (min-width: 834px) {
    margin-left: 172px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 846px;
  }
`;
export const ProfileButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 834px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-left: 172px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 846px;
  }
`;

export const ProfileSaveBtn = styled.button`
  margin-left: 10px;
  margin-top: 12px;
  margin-right: 10px;
  width: 300px;
  height: 40px;
  padding: 8px 10px;
  border-radius: 12px;
  background-color: #e3ffa8;
  color: #0f0f0f;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;

  @media (min-width: 834px) {
    width: 212px;
    height: 36px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 0;
  }
  &:hover {
    background-color: #fff3b7;
  }
`;

export const ProfileCancelBtn = styled.button`
  margin-left: 10px;
  margin-top: 12px;
  margin-bottom: 40px;
  border-radius: 12px;
  color: #b6b6b6;
  width: 300px;
  height: 40px;
  background-color: #0f0f0f;
  border: none;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  @media (min-width: 834px) {
    width: 212px;
    height: 36px;
  }
`;

export const DesktopContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;
export const DesktopActivity = styled.div`
  @media screen and (min-width: 1440px) {
    margin-top: -190px;
  }
`;

export const UploadButton = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const UploadIconSvg = styled.svg`
  width: 16px;
  height: 16px;
  margin-top: 17px;
`;

export const UploadIconUse = styled.use``;
export const ErrorMess = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  position: absolute;
`;
