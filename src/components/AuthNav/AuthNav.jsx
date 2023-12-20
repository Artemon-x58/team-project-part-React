import Icons from '../../icons/icons.svg';
import { AuthNavLink, AuthNavWrapper, Slash } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <AuthNavLink to="/signin">Sign in</AuthNavLink>
      <Slash>/</Slash>
      <AuthNavLink to="/signup">Sign up</AuthNavLink>
      <svg width="28px" height="28px">
        <use xlinkHref={`${Icons}#icon-header-login-Logout-Icon`} />
      </svg>
    </AuthNavWrapper>
  );
};
