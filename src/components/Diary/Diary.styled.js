import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeightContainer = styled.div`
  min-height: 1594px;
  @media screen and (min-width: 834px) {
    min-height: 1400px;
  }
  @media screen and (min-width: 1440px) {
    min-height: 800px;
  }
`;
export const ArrowBack = styled.svg`
  width: 16px;
  height: 16px;
  @media screen and (min-width: 834px) {
    width: 24px;
    height: 24px;
  }
`;
export const TitleWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 834px) {
    gap: 12px;
    margin-bottom: 6px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }
`;
export const Title = styled.h2`
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`;
export const BigWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
export const MealWrap = styled.div`
  max-height: 385px;
  margin-bottom: 24px;
  @media screen and (min-width: 1440px) {
    width: 676px;
    &:nth-child(1),
    &:nth-child(3) {
      margin-right: 20px;
    }
  }
`;
export const WrapNameValue = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 706px;
  }
  @media screen and (min-width: 1440px) {
    width: 633px;
  }
`;
export const WrapMealName = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  @media screen and (min-width: 834px) {
    margin-bottom: 6px;
  }
`;
export const MealName = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`;
export const MealContainList = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 12px;
  width: 178px;
  flex-wrap: wrap;
  margin-bottom: 12px;
  @media screen and (min-width: 834px) {
    width: 359px;
    gap: 4px;
    flex-wrap: nowrap;
  }
  @media screen and (min-width: 1440px) {
    width: 330px;
  }
`;
export const MealContain = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;
export const MealValue = styled.p`
  color: #b6b6b6;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-right: 16px;
  &:last-child {
    margin-right: 0;
  }
  @media screen and (min-width: 834px) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
  @media screen and (min-width: 1440px) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
export const ListWrap = styled.div`
  width: 276px;
  min-height: 200px;
  max-height: 256px;
  border-radius: 12px;
  background: #0f0f0f;
  padding: 16px 12px;
  @media screen and (min-width: 834px) {
    width: 752px;
    padding: 32px 14px;
    min-height: 176px;
  }
  @media screen and (min-width: 1440px) {
    width: 648px;
  }
`;
export const MealList = styled.ul`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 834px) {
  }
`;
export const MealItem = styled.li`
  display: flex;
  gap: 16px;
  &:not(:nth-child(4)) {
    margin-bottom: 16px;
  }
  @media screen and (min-width: 834px) {
    &:not(:nth-child(4)) {
      margin-bottom: 32px;
    }
  }
`;
export const Number = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  @media screen and (min-width: 834px) {
    width: 16px;
  }
`;
export const Dish = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 6px;
  @media screen and (min-width: 834px) {
    align-items: center;
    margin-bottom: 0;
    width: 720px;
  }
  @media screen and (min-width: 1440px) {
    width: 613px;
  }
`;
export const DishName = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    margin-right: 215px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 150px;
  }
`;
export const StatWrap = styled.div`
  display: flex;
  @media screen and (min-width: 834px) {
    order: 1;
    gap: 32px;
  }
`;
export const DishStat = styled.p`
  color: #b6b6b6;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-right: 6px;
  @media screen and (min-width: 834px) {
    display: none;
  }
`;
export const DishValue = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  width: 30px;
  margin-right: 12px;
  @media screen and (min-width: 834px) {
    width: 80px;
    font-size: 14px;
    line-height: 20px;
    margin-right: 0;
  }
  @media screen and (min-width: 1440px) {
    &:nth-child(6) {
      width: 19px;
    }
  }
`;
export const EditWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  @media screen and (min-width: 834px) {
    order: 2;
  }
`;
export const EditText = styled.p`
  color: #b6b6b6;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  @media screen and (min-width: 834px) {
  }
`;
export const MealRecordWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #e3ffa8;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  &:not(:nth-child(4)) {
    margin-bottom: 26px;
  }
  @media screen and (min-width: 834px) {
    &:not(:nth-child(4)) {
      margin-bottom: 0;
    }
  }
`;
export const Space = styled.div`
  margin-bottom: 40px;
  @media screen and (min-width: 834px) {
    margin-bottom: 0;
  }
`;
export const DishNameEdit = styled.input`
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  @media screen and (min-width: 834px) {
    margin-right: 165px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 60px;
  }
`;
export const DishStatEdit = styled.label`
  color: #b6b6b6;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-right: 5px;
  @media screen and (min-width: 834px) {
    display: none;
  }
`;
export const DishValueEdit = styled.input`
  width: 30px;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  margin-right: 5px;
  @media screen and (min-width: 834px) {
    width: 50px;
    margin-right: 20px;
  }
`;
export const CircleSave = styled.svg`
  width: 14px;
  height: 14px;
  fill: #fff;
  border: 1px solid #fff;
  border-radius: 50%;
  @media screen and (min-width: 834px) {
    width: 16px;
    height: 16px;
  }
`;
export const CircleCancel = styled.svg`
  width: 14px;
  height: 14px;
  fill: #fff;
  border: 1px solid #fff;
  border-radius: 50%;
  @media screen and (min-width: 834px) {
    width: 16px;
    height: 16px;
  }
`;
export const CircleDelete = styled.svg`
  width: 14px;
  height: 14px;
  fill: #fff;
  border: 1px solid #fff;
  border-radius: 50%;
  @media screen and (min-width: 834px) {
    width: 16px;
    height: 16px;
  }
`;
export const CircleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  @media screen and (min-width: 834px) {
    gap: 8px;
    order: 2;
  }
  @media screen and (min-width: 1440px) {
    gap: 6px;
    order: 2;
  }
`;
export const MoreLink = styled(Link)`
  width: 16px;
  height: 16px;
  @media screen and (min-width: 834px) {
    width: 24px;
    height: 24px;
  }
`;
