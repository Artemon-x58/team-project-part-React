import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllStatistics } from 'redux/statistics/statisticsOperations';

export const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllStatistics());
  }, [dispatch]);
  return (
    <>
      <div style={{ color: 'white' }}>
        ЦЕ ПРИВАТНИЙ РОУТ (може відображатися тільки для залогіненого
        користувача) - СТОРІНКА МЕЙН.{' '}
      </div>
      <div style={{ color: 'white' }}>
        В цей момент вже відбувся запит за всією інформацією для сторінки МЕЙН,
        а також вся отримана інформація вже була записана в redux store!
      </div>
    </>
  );
};
