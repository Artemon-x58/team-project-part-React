import { useState } from 'react';
import Modal from 'react-modal';
import linkIconsSprite from '../../icons/icons.svg';
import {
  Button,
  StyledForm,
  ModalButtonCansel,
  ModalButtonConfirm,
  ModalInput,
  ModalTitle,
  Title,
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
    padding: '24px 40px',
    borderRadius: '12px',
    color: '#fff',
    border: 'none',
    background: '#0f0f0f',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
};

const AddWaterModal = ({ addWater }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState('');

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    addWater(parseInt(amount, 10));
    closeModal();
  }

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
        <Title>Add water intake</Title>

        <StyledForm onSubmit={handleSubmitForm}>
          <ModalTitle>How much water</ModalTitle>
          <ModalInput
            type="text"
            placeholder="Enter milliliters"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
          <ModalButtonConfirm style={{ width: '100%' }} type="submit">
            Confirm
          </ModalButtonConfirm>
          <ModalButtonCansel style={{ width: '100%' }} onClick={closeModal}>
            Cansel
          </ModalButtonCansel>
        </StyledForm>
      </Modal>
    </>
  );
};

export default AddWaterModal;
