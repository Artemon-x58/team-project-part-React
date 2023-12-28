import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

import {
  Button,
  ButtonBack,
  ModalContentWrapper,
  Title,
} from './ModalLogout.styled';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { Loader } from 'components/Loader/Loader';

const customStyles = {
  overlay: {
    zIndex: 10,
    background: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '12px',
    background: 'rgb(15, 15, 15)',
    boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.2)',

    padding: 10,
    boxSizing: 'border-box',
  },
};
Modal.setAppElement('#root');

export const ModalLogout = ({ isOpen, isClose }) => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);
  return !isRefresh ? (
    <Modal
      isOpen={isOpen}
      onRequestClose={isClose}
      style={customStyles}
      onAfterOpen={() => (document.body.style.overflow = 'hidden')}
      onAfterClose={() => (document.body.style.overflow = 'unset')}
    >
      <ModalContentWrapper>
        <Title>Do you really want to log out?</Title>
        <div>
          <Button type="button" onClick={() => dispatch(logOut())}>
            Log out
          </Button>
          <ButtonBack type="button" onClick={isClose}>
            Cancel
          </ButtonBack>
        </div>
      </ModalContentWrapper>
    </Modal>
  ) : (
    <Loader />
  );
};
