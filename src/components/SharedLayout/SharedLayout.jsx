import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container } from 'components/Container/Container.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
