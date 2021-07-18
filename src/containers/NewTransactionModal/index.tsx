import Modal from 'react-modal';
import { useState } from 'react';
import { InnerHeader } from "../../components/InnerHeader";
import { IconButton } from "../../components/buttons/IconButton";
import { IncomeOutcomeButton } from '../../components/buttons/IncomeOutcomeButton';

import { Form, Container, HeaderContent } from './style';
import closeImg from '../../assets/close.svg';

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export const NewTransactionModal: React.FC<INewTransactionModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const [isIncome, setIsIncome] = useState(false);
  const [isOutcome, setIsOutcome] = useState(false);

  function handleSelectIncome() {
    setIsIncome(true);
    setIsOutcome(false);
  }

  function handleSelectOutcome() {
    setIsOutcome(true);
    setIsIncome(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className='react-modal-content'
      overlayClassName='react-modal-overlay'
    >
      <InnerHeader>
        <HeaderContent
          className='light'
        >
          Add New Transaction
        </HeaderContent>
        <IconButton
          icon={closeImg}
          name="Close Button"
          onOpenNewTransactionModal={onRequestClose}
        />
      </InnerHeader>
      <Container>
        <Form>
          <input placeholder="Title" />
          <input type="number" placeholder="Value" />
          <div className="input-output-container">
            <IncomeOutcomeButton
              type='income'
              active={isIncome}
              onClickEvent={handleSelectIncome}
            />
            <IncomeOutcomeButton
              type='outcome'
              active={isOutcome}
              onClickEvent={handleSelectOutcome}
            />
          </div>
          <input placeholder="Category" />
          <button type="submit" className="submit">ADD</button>
        </Form>
      </Container>
    </Modal>
  );
}
