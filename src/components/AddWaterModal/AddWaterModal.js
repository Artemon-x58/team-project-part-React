import { useState } from 'react';
import Modal from 'react-modal';
import linkIconsSprite from '../../icons/icons.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  StyledForm,
  ModalButtonCansel,
  ModalButtonConfirm,
  ModalInput,
  ModalTitle,
  Title,
  ModalWrapper,
} from './AddWaterModal.styled';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '12px',
    color: '#fff',
    border: 'none',
    background: '#0f0f0f',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
};

const validationSchema = Yup.object().shape({
  amount: Yup.number().required().positive().integer().max(3000),
});

const AddWaterModal = ({ addWater, dailyGoal, consumedWater }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const formik = useFormik({
    initialValues: {
      amount: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      addWater(parseInt(values.amount, 10));
      closeModal();
    },
  });

  const isGoalAchieved = consumedWater >= dailyGoal;

  return (
    <>
      <Button onClick={openModal}>
        <svg height={16} width={16}>
          <use href={`${linkIconsSprite}#icon-add`} />
        </svg>
        Add water intake
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalWrapper>
          {isGoalAchieved ? (
            <Title>You've reached goal! 🥳</Title>
          ) : (
            <Title>Add water intake</Title>
          )}

          <StyledForm onSubmit={formik.handleSubmit}>
            <ModalTitle>How much water</ModalTitle>
            <ModalInput
              type="text"
              name="amount"
              placeholder="Enter milliliters"
              value={formik.values.amount}
              onChange={formik.handleChange}
            />
            <ModalButtonConfirm style={{ width: '100%' }} type="submit">
              Confirm
            </ModalButtonConfirm>
            <ModalButtonCansel style={{ width: '100%' }} onClick={closeModal}>
              Cansel
            </ModalButtonCansel>
          </StyledForm>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default AddWaterModal;
