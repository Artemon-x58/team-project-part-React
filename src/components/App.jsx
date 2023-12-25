import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { refreshUser } from 'redux/auth/authOperations';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { WelcomePage } from '../pages/WelcomePage/WelcomePage';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage';
import { SignInPage } from '../pages/SignInPage/SignInPage';
import { ForgotPasswordPage } from './ForgotPasswordPage/ForgotPasswordPage';
import { Toaster } from 'react-hot-toast';

import { RestrictedRoute } from 'routes/RestrictedRoute';
import { MainPage } from '../pages/MainPage/MainPage';
import { PrivateRoute } from 'routes/PrivateRoute';
import Recommented from './Recommented/Recommented';
import { ProfileMain } from '../pages/ProfileMain/ProfileMain';
import MonthSelector from '../components/MonthSelector/MonthSelector';



export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
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

          <Route
            path="forgot-password"
            element={
              <RestrictedRoute
                redirectTo="/main"
                component={<ForgotPasswordPage />}
              />
            }
          />
          <Route
            path="main"
            element={
              <PrivateRoute redirectTo="/signin" component={<MainPage />} />
            }
          />
          <Route
            path="setting"
            element={
              <PrivateRoute redirectTo="/setting" component={<ProfileMain />} />
            }
          />
          <Route
            path="test"
            element={<PrivateRoute redirectTo="/test" component={<MonthSelector />} />}
          />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};
