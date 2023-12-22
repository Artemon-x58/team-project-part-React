import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const DiaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  @media screen and (min-width: 834px) {
    width: 558px;
    height: 276px;
    gap: 0;
  }
`;
export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;
export const Title = styled.h3`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const MoreLink = styled(Link)`
  color: #b6b6b6;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const WrapMeal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    width: ${({ ismealrecorded }) =>
      ismealrecorded === 'true' ? '558px' : '306px'};
    justify-content: space-between;
    margin-top: 0;
    &:not(:last-child) {
      margin-bottom: 28px;
    }
  }
`;
export const WrapMealName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
  gap: 12px;
  @media screen and (min-width: 834px) {
    margin: 0;
  }
`;
export const MealName = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`;
export const MealContainList = styled.ul`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;
  &:not(:last-child) {
    margin-bottom: 28px;
  }
  @media screen and (min-width: 834px) {
    align-items: center;
    gap: 20px;
    margin-bottom: 0;
  }
`;
export const MealContain = styled.li`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  gap: 4px;
`;
export const MealValue = styled.p`
  width: 36px;
  color: #b6b6b6;
  font-weight: 500;
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
`;
