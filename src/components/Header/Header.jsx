import { useSelector } from 'react-redux';
// import Icons from '../../icons/icons.svg';
import { NavWrapper, LogoLink, Styledheader } from './Header.styled';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/authSelectors';

import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoadingCurrentUser = useSelector(selectIsRefreshing);

  return (
    <Styledheader>
      <LogoLink to="/">HealthyHub</LogoLink>

      <NavWrapper>
        {!isLoggedIn && !isLoadingCurrentUser ? <AuthNav /> : <UserMenu />}
      </NavWrapper>
    </Styledheader>
  );
};
