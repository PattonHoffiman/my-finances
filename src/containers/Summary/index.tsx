import { useState, useEffect } from 'react';
import { useSpring, animated as a } from 'react-spring';

import { Info } from '../../components/Info';
import { Content } from '../../components/Content';
import { InnerHeader } from '../../components/InnerHeader';
import { HeaderContent, ContentValue, ContentTitle, LoadingContainer } from './style';

import { api } from '../../services/api';
import { ITransactionData } from '../../services/mirage';
import { sortByIncome, sortByOutcome } from '../../utils/sort';

interface ISummaryProps {
  show: boolean;
}

export const Summary: React.FC<ISummaryProps> = ({ show }) => {
  const props = useSpring({
    opacity: show ? 1 : 0,
    display: show ? 'block' : 'none',
  });

  const [load, setLoad] = useState(true);

  const [total, setTotal] = useState(0);
  const [incomes, setIncomes] = useState(0);
  const [outcomes, setOutcomes] = useState(0);

  useEffect(() => {
    api.get('transactions')
      .then(res => {
        setLoad(true);
        const transactions = res.data as ITransactionData[];
        const incomeTransactions = sortByIncome(transactions).map(transaction => transaction.amount);
        const outcomeTransactions = sortByOutcome(transactions).map(transaction => transaction.amount);

        const incomeValue = incomeTransactions.reduce((valueA, valueB) => valueA + valueB, 0);
        const outcomeValue = outcomeTransactions.reduce((valueA, valueB) => valueA + valueB, 0);

        setIncomes(incomeValue);
        setOutcomes(outcomeValue);
        setTotal(incomeValue - outcomeValue);
        setLoad(false);
      });
  }, []);

  return (
    <a.div style={props}>
      {!load ? (
        <>
          <InnerHeader>
            <HeaderContent>June</HeaderContent>
            <HeaderContent className="light">2021</HeaderContent>
          </InnerHeader>
          <Content>
            <Info>
              <ContentTitle>Incomes</ContentTitle>
              <ContentValue>R$ {incomes}</ContentValue>
            </Info>
            <Info>
              <ContentTitle>Outcomes</ContentTitle>
              <ContentValue>R$ {outcomes}</ContentValue>
            </Info>
            {total >= 0 ? (
              <Info className="highlight-green">
                <ContentTitle className="highlight">Total</ContentTitle>
                <ContentValue>R$ {total}</ContentValue>
              </Info>
            ) : (
              <Info className="highlight-red">
                <ContentTitle className="highlight">Total</ContentTitle>
                <ContentValue>R$ {total * -1}</ContentValue>
              </Info>
            )
            }
          </Content>
        </>
      ) : (
        <LoadingContainer>
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </LoadingContainer>
      )}
    </a.div>
  );
}