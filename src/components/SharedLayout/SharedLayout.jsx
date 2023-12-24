import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container } from 'components/Container/Container.styled';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  const isLoading = useSelector(selectIsRefreshing);
  return (
    <>
      <Header />
      <Container>{!isLoading ? <Outlet /> : <Loader />}</Container>
    </>
  );
};
