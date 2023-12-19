import { useSelector } from 'react-redux';

import { NavWrapper, LogoLink, Styledheader } from './Header.styled';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Styledheader>
      <LogoLink to="/">HealthyHub</LogoLink>

      <NavWrapper>{!isLoggedIn ? <AuthNav /> : <UserMenu />}</NavWrapper>
    </Styledheader>
  );
};
