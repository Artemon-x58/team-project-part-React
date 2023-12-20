import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { refreshUser } from 'redux/auth/authOperations';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { WelcomePage } from './WelcomePage/WelcomePage';
import { SignUpPage } from './SignUpPage/SignUpPage';
import { SignInPage } from './SignInPage/SignInPage';
import { ForgotPasswordPage } from './ForgotPasswordPage/ForgotPasswordPage';
import { Toaster } from 'react-hot-toast';
import FoodPage from './FoodPage/FoodPage';

export const App = () => {
  const dispatch = useDispatch();
  const isLoadingCurrentUser = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isLoadingCurrentUser && (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<WelcomePage />} />
            <Route path="food" element={<FoodPage />} />
            <Route path="signin" element={<SignInPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
          </Route>
        </Routes>
      )}
      <Toaster />
    </>
  );
};
