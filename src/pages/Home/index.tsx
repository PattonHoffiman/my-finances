import { useState } from 'react';
import { Main } from "../../components/Main";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { FloatButton } from "../../components/FloatButton";

import { Summary } from "../../containers/Summary";
import { Transactions } from "../../containers/Transactions";

export const Home: React.FC = () => {
  const [showSummary, setShowSummary] = useState(true);
  const [buttonAnimate, setButtonAnimate] = useState('menu');
  const [showTransactions, setShowTransactions] = useState(false);

  function animateSummary(): void {
    setButtonAnimate('menu');
    
    setShowTransactions(false);
    setShowSummary(true);
  }

  function animateTransitions(): void {
    setButtonAnimate('transactions');

    setShowSummary(false);
    setShowTransactions(true);
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
        />
      </Main>
    </>
  );
}