import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { StyledSharedLayout } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <StyledSharedLayout>
      <Header />
      <Outlet />
    </StyledSharedLayout>
  );
};
