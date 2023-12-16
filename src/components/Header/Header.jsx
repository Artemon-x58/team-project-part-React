import { useDispatch, useSelector } from 'react-redux';
import Icons from '../../icons/icons.svg';
import {
  AuthNavLink,
  NavWrapper,
  LogoLink,
  Styledheader,
} from './Header.styled';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoadingCurrentUser = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  return (
    <Styledheader>
      <LogoLink to="/">HealthyHub</LogoLink>

      <NavWrapper>
        {!isLoggedIn && !isLoadingCurrentUser ? (
          <>
            <AuthNavLink to="/signin">Sign in</AuthNavLink>
            <span>/</span>
            <AuthNavLink to="/signup">Sign up</AuthNavLink>
          </>
        ) : (
          <button type="button" onClick={() => dispatch(logOut())}>
            Log out
          </button>
        )}
        <svg width="28px" height="28px">
          <use xlinkHref={`${Icons}#icon-header-login-Logout-Icon`} />
        </svg>
      </NavWrapper>
    </Styledheader>
  );
};
