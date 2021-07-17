import { useState } from 'react';
import Modal from 'react-modal';

import { Main } from "../../components/Main";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { IconButton } from "../../components/IconButton";
import { InnerHeader } from "../../components/InnerHeader";
import { FloatButton } from "../../components/FloatButton";

import { Summary } from "../../containers/Summary";
import { Transactions } from "../../containers/Transactions";

import closeImg from '../../assets/close.svg';

Modal.setAppElement('#root');

export const Home: React.FC = () => {
  const [showSummary, setShowSummary] = useState(true);
  const [buttonAnimate, setButtonAnimate] = useState('menu');
  const [showTransactions, setShowTransactions] = useState(false);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function animateSummary() {
    setButtonAnimate('menu');

    setShowTransactions(false);
    setShowSummary(true);
  }

  function animateTransitions() {
    setButtonAnimate('transactions');

    setShowSummary(false);
    setShowTransactions(true);
  }

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header />
      <Main>
        <Section>
          <Summary show={showSummary} />
          <Transactions
            show={showTransactions}
            animateSummary={animateSummary}
          />
        </Section>
        <FloatButton
          buttonAnimate={buttonAnimate}
          animateSummary={animateSummary}
          animateTransitions={animateTransitions}
          onOpenNewTransactionModal={handleOpenNewTransactionModal}
        />
      </Main>
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <InnerHeader>
          <h3>Add New Transaction</h3>
          <IconButton
            icon={closeImg}
            name="Close Button"
            onOpenNewTransactionModal={handleCloseNewTransactionModal}
          />
        </InnerHeader>
      </Modal>
    </>
  );
}