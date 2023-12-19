import { useDispatch } from 'react-redux';
import Icons from '../../icons/icons.svg';

import Menu from '../../icons/icons.svg';
import ArrowDown from '../../icons/icons.svg';
import Close from '../../icons/icons.svg';
import LoseFat from '../../img/Lose-fat-image-men.png';
import { logOut } from 'redux/auth/authOperations';
import { useState } from 'react';
import {
  MobileMenu,
  OpenMenuBtn,
  ImgWrapper,
  CardMenuWrapper,
  Title,
  Value,
  CardItemWrapper,
  CloseBtn,
  UserName,
  AvatarWrapper,
  OpenSettingBtn,
  SettingWrapper,
} from './UserMenu.styled';

export const UserMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  const toggleShowMenu = () => {
    setShowMenu(showMenu => !showMenu);
  };

  return (
    <>
      <OpenMenuBtn type="button" onClick={toggleShowMenu}>
        <svg>
          <use xlinkHref={`${Menu}#icon-menu-header-mobile`} />
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
                <use xlinkHref={`${Close}#icon-close-circle`} />
              </svg>
            </CloseBtn>
          </CardMenuWrapper>
        </MobileMenu>
      )}
      <UserName>Konstantin</UserName>

      <AvatarWrapper>
        <svg>
          <use xlinkHref={`${Icons}#icon-header-login-Logout-Icon`} />
        </svg>
      </AvatarWrapper>
      <SettingWrapper>
        <OpenSettingBtn type="button" onClick={toggleShowMenu}>
          <svg>
            <use xlinkHref={`${ArrowDown}#icon-arrow-down`} />
          </svg>
        </OpenSettingBtn>
        {showMenu && (
          <MobileMenu>
            <CardMenuWrapper>
              <button type="button" onClick={() => dispatch(logOut())}>
                Log Out
              </button>
            </CardMenuWrapper>
          </MobileMenu>
        )}
      </SettingWrapper>
    </>
  );
};
