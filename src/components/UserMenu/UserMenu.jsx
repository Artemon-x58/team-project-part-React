import { useEffect, useState } from 'react';

import { MobileHeaderMenu } from './MobileHeaderMenu/MobileHeaderMenu';
import { TablDeskHeaderMenu } from './TablDeskHeaderMenu/TablDeskHeaderMenu';

export const UserMenu = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 833);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 833);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{isMobile ? <MobileHeaderMenu /> : <TablDeskHeaderMenu />}</>;
};
