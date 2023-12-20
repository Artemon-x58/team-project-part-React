import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { refreshUser } from 'redux/auth/authOperations';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { WelcomePage } from './WelcomePage/WelcomePage';
import { SignUpPage } from './SignUpPage/SignUpPage';
import { SignInPage } from './SignInPage/SignInPage';
import { ForgotPasswordPage } from './ForgotPasswordPage/ForgotPasswordPage';
import { Toaster } from 'react-hot-toast';

import { RestrictedRoute } from 'routes/RestrictedRoute';
import { MainPage } from './MainPage/MainPage';
import { PrivateRoute } from 'routes/PrivateRoute';
import Recommented from './Recommented/Recommented';

export const App = () => {
  const dispatch = useDispatch();
  // const isLoadingCurrentUser = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {/* {!isLoadingCurrentUser && ( */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute redirectTo="/main" component={<WelcomePage />} />
            }
          />
          <Route
            path="signin"
            element={
              <RestrictedRoute redirectTo="/main" component={<SignInPage />} />
            }
          />
          <Route
            path="recommented"
            element={
              <RestrictedRoute redirectTo="/main" component={<Recommented />} />
            }
          />
          <Route
            path="signup"
            element={
              <RestrictedRoute redirectTo="/main" component={<SignUpPage />} />
            }
          />

          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route
            path="main"
            element={
              <PrivateRoute redirectTo="/signin" component={<MainPage />} />
            }
          />
        </Route>
      </Routes>
      {/* )} */}
      <Toaster />
    </>
  );
};
