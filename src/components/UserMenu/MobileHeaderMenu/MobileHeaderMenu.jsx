import { useState } from 'react';

import Icons from 'icons/icons.svg';

import LoseFat from 'img/Lose-fat-image-men.png';

import {
  CardItemWrapper,
  CardMenuWrapper,
  CloseBtn,
  ImgWrapper,
  MobileMenu,
  MobileMenuWrapper,
  OpenMenuBtn,
  Title,
  Value,
} from './MobileHeaderMenu.styled';
import { Profile } from '../../Profile/Profile';

export const MobileHeaderMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(showMenu => !showMenu);
  };

  return (
    <MobileMenuWrapper>
      <OpenMenuBtn type="button" onClick={toggleShowMenu}>
        <svg>
          <use xlinkHref={`${Icons}#icon-menu-header-mobile`} />
        </svg>
      </OpenMenuBtn>

      {showMenu && (
        <MobileMenu>
          <CardMenuWrapper>
            <CardItemWrapper>
              <ImgWrapper>
                <img src={LoseFat} alt="LoseFat" />
              </ImgWrapper>
              <div>
                <Title>Goal</Title>
                <Value>Lose fat</Value>
              </div>
            </CardItemWrapper>
            <CardItemWrapper>
              <ImgWrapper>
                <img src={LoseFat} alt="LoseFat" />
              </ImgWrapper>
              <div>
                <Title>Goal</Title>
                <Value>Lose fat</Value>
              </div>
            </CardItemWrapper>
            <CloseBtn type="button" onClick={() => setShowMenu(false)}>
              <svg>
                <use xlinkHref={`${Icons}#icon-close-circle`} />
              </svg>
            </CloseBtn>
          </CardMenuWrapper>
        </MobileMenu>
      )}
      <Profile />
    </MobileMenuWrapper>
  );
};
