import Icons from '../../icons/icons.svg';
import { AuthNavLink } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <>
      <AuthNavLink to="/signin">Sign in</AuthNavLink>
      <span>/</span>
      <AuthNavLink to="/signup">Sign up</AuthNavLink>
      <svg width="28px" height="28px">
        <use xlinkHref={`${Icons}#icon-header-login-Logout-Icon`} />
      </svg>
    </>
  );
};
