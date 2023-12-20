import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icons from 'icons/icons.svg';
import Lose from 'img/Lose-fat-image-men.png';
import Waight from 'img/Waight-image.png';

import { selectDataUser } from 'redux/statistics/statisticsSelectors';

import {
  CardItemWrapper,
  CardMenuWrapper,
  EditWeightBtn,
  ImgWrapper,
  Mark,
  MenuWrapper,
  OpenMenuBtn,
  Title,
  Value,
  Weight,
  Wrapper,
} from './TablDeskHeaderMenu.styled';

import { Profile } from 'components/Profile/Profile';

export const TablDeskHeaderMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector(selectDataUser);

  const toggleShowMenu = () => {
    setShowMenu(showMenu => !showMenu);
  };

  return (
    <MenuWrapper>
      <CardMenuWrapper>
        <CardItemWrapper>
          <ImgWrapper>
            <img src={Lose} alt="LoseFat" />
          </ImgWrapper>
          <Wrapper>
            <Title>Goal</Title>
            <Value>Lose fat</Value>
          </Wrapper>
          <OpenMenuBtn type="button" onClick={toggleShowMenu}>
            <svg>
              <use xlinkHref={`${Icons}#icon-arrow-down`} />
            </svg>
          </OpenMenuBtn>
        </CardItemWrapper>
        <CardItemWrapper>
          <ImgWrapper>
            <img src={Waight} alt="Waight" />
          </ImgWrapper>
          <div>
            <Title>Weight</Title>
            <Value>
              <Weight>{userData.weight}</Weight>
              <Mark>kg</Mark>
              <EditWeightBtn type="button" onClick={toggleShowMenu}>
                <svg>
                  <use xlinkHref={`${Icons}#icon-edit`} />
                </svg>
              </EditWeightBtn>
            </Value>
          </div>
        </CardItemWrapper>
      </CardMenuWrapper>
      <Profile />
    </MenuWrapper>
  );
};
