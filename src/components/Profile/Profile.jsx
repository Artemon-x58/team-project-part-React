import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AvatarWrapper,
  OpenSettingBtn,
  SettingBtn,
  SettingMenu,
  SettingWrapper,
  UserName,
  Wrapper,
} from './Profile.styled';

import Icons from 'icons/icons.svg';

import { selectDataUser } from 'redux/statistics/statisticsSelectors';
import { useSelector } from 'react-redux';
import { ModalLogout } from 'components/ModalLogout/ModalLogout';

export const Profile = () => {
  const [showSetting, setShowSetting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const userData = useSelector(selectDataUser);

  const navigate = useNavigate();

  const menuSettingRef = useRef();

  const createAvatarUrl = url => {
    if (url.includes('https:')) {
      return url;
    } else {
      return `https:${userData.avatarURL}`;
    }
  };

  const toggleShowSetting = () => {
    setShowSetting(showSetting => !showSetting);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        menuSettingRef.current &&
        !menuSettingRef.current.contains(event.target)
      ) {
        setShowSetting(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Wrapper ref={menuSettingRef}>
      <UserName>{userData.name}</UserName>
      <AvatarWrapper>
        <img src={createAvatarUrl(userData.avatarURL)} alt={userData.name} />
      </AvatarWrapper>
      <SettingWrapper>
        <OpenSettingBtn
          type="button"
          onClick={toggleShowSetting}
          $isOpen={showSetting}
        >
          <svg>
            <use xlinkHref={`${Icons}#icon-arrow-down`} />
          </svg>
        </OpenSettingBtn>
        {showSetting && (
          <SettingMenu>
            <SettingBtn
              type="button"
              onClick={() => {
                toggleShowSetting();
                navigate('/setting');
              }}
            >
              <svg>
                <use xlinkHref={`${Icons}#icon-settings`} />
              </svg>
              <span> Setting</span>
            </SettingBtn>
            <SettingBtn type="button" onClick={() => setShowModal(true)}>
              <svg>
                <use xlinkHref={`${Icons}#icon-logout`} />
              </svg>
              <span> Log Out</span>
            </SettingBtn>
          </SettingMenu>
        )}
      </SettingWrapper>
      <ModalLogout isOpen={showModal} isClose={() => setShowModal(false)} />
    </Wrapper>
  );
};
