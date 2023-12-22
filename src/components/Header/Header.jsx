import { useSelector } from 'react-redux';

import { HeaderWrapper, LogoLink, Styledheader } from './Header.styled';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Container } from 'components/Container/Container.styled';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Styledheader>
      <Container>
        <HeaderWrapper>
          <LogoLink to="/">HealthyHub</LogoLink>

          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </HeaderWrapper>
      </Container>
    </Styledheader>
  );
};
