import { RotatingLines } from 'react-loader-spinner';
import { LoaderWraper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWraper>
      <RotatingLines
        strokeColor="green"
        strokeWidth="5"
        animationDuration="1"
        width="96"
        visible={true}
      />
    </LoaderWraper>
  );
};
