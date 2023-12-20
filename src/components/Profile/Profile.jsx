import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  AvatarWrapper,
  OpenSettingBtn,
  SettingBtn,
  SettingMenu,
  SettingWrapper,
  UserName,
  Wrapper,
} from './Profile.styled';

import { logOut } from 'redux/auth/authOperations';

import Icons from 'icons/icons.svg';

import { selectDataUser } from 'redux/statistics/statisticsSelectors';
import { useSelector } from 'react-redux';

export const Profile = () => {
  const [showSetting, setShowSetting] = useState(false);
  const userData = useSelector(selectDataUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleShowSetting = () => {
    setShowSetting(showSetting => !showSetting);
  };

  return (
    <Wrapper>
      <UserName>{userData.name}</UserName>
      <AvatarWrapper>
        <img src={`https:${userData.avatarURL}`} alt={userData.name} />
      </AvatarWrapper>
      <SettingWrapper>
        <OpenSettingBtn type="button" onClick={toggleShowSetting}>
          <svg>
            <use xlinkHref={`${Icons}#icon-arrow-down`} />
          </svg>
        </OpenSettingBtn>
        {showSetting && (
          <SettingMenu>
            <SettingBtn type="button" onClick={() => navigate('/setting')}>
              <svg>
                <use xlinkHref={`${Icons}#icon-settings`} />
              </svg>
              <span> Setting</span>
            </SettingBtn>
            <SettingBtn type="button" onClick={() => dispatch(logOut())}>
              <svg>
                <use xlinkHref={`${Icons}#icon-logout`} />
              </svg>
              <span> Log Out</span>
            </SettingBtn>
          </SettingMenu>
        )}
      </SettingWrapper>
    </Wrapper>
  );
};
