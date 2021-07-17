import { useState, useEffect } from 'react';
import { useSpring, animated as a } from 'react-spring';

import { Info } from '../../components/Info';
import { Content } from '../../components/Content';
import { InnerHeader } from '../../components/InnerHeader';

import { api } from '../../services/api';
import { toBRL } from '../../utils/toBRL';
import { toPtBR } from '../../utils/toLocalDate';
import { ITransactionData } from '../../services/mirage';

import {
  sortByIncome,
  sortByOutcome,
  sortByNameAsc,
  sortByNameDesc,
  sortByAmountAsc,
  sortByAmountDesc
} from '../../utils/sort';

import BackImg from '../../assets/back.svg';

import {
  Filter,
  Wrapper,
  BackButton,
  ContentName,
  ContentValue,
  FilterContainer,
  ContentSecondary,
  SecondaryContainer
} from './style';

interface ITransitionsProps {
  show: boolean;
  animateSummary(): void;
}

export const Transactions: React.FC<ITransitionsProps> =
  ({ show, animateSummary }) => {
    const props = useSpring({
      opacity: show ? 1 : 0,
      display: show ? 'block' : 'none'
    });

    const [filterValue, setFilterValue] = useState('default');
    const [filterTitle, setFilterTitle] = useState('default');
    const [filterInOutCome, setFilterInOutCome] = useState('default');

    const [transactions, setTransactions] = useState<ITransactionData[]>([]);
    const [transactionsWithFilters, setTransactionsWithFilters] = useState<ITransactionData[]>([]);

    const tempTransactions = transactions.map(transaction => transaction);
    const tempTransactionsWithFilters = transactionsWithFilters.map(transaction => transaction);

    function changeFilterValue() {
      let applyFilter;
      setFilterTitle('default');
      setFilterInOutCome('default');
      const isEmpty = transactionsWithFilters.length === 0;
      applyFilter = isEmpty ? tempTransactions : tempTransactionsWithFilters;

      if (filterValue === 'default') {
        setFilterValue('up');
        applyFilter.sort(sortByAmountAsc);
        setTransactionsWithFilters(applyFilter);
      } else if (filterValue === 'up') {
        setFilterValue('down');
        applyFilter.sort(sortByAmountDesc);
        setTransactionsWithFilters(applyFilter);
      } else {
        setFilterValue('default');
        setTransactionsWithFilters([]);
      }
    }

    function changeFilterTitle() {
      let applyFilter;
      setFilterValue('default');
      setFilterInOutCome('default');
      const isEmpty = transactionsWithFilters.length === 0;
      applyFilter = isEmpty ? tempTransactions : tempTransactionsWithFilters;


      if (filterTitle === 'default') {
        setFilterTitle('fromA');
        applyFilter.sort(sortByNameAsc);
        setTransactionsWithFilters(applyFilter);
      } else if (filterTitle === 'fromA') {
        setFilterTitle('fromZ');
        applyFilter.sort(sortByNameDesc);
        setTransactionsWithFilters(applyFilter);
      } else {
        setFilterTitle('default');
        setTransactionsWithFilters([]);
      }
    }

    function changeFilterInOutCome() {
      let applyFilter;
      setFilterValue('default');
      setFilterTitle('default');
      applyFilter = tempTransactions;

      if (filterInOutCome === 'default') {
        setFilterInOutCome('income');
        applyFilter = sortByIncome(applyFilter);
        setTransactionsWithFilters(applyFilter);
      } else if (filterInOutCome === 'income') {
        setFilterInOutCome('outcome');
        applyFilter = sortByOutcome(applyFilter);
        setTransactionsWithFilters(applyFilter);
      } else {
        setFilterInOutCome('default');
        setTransactionsWithFilters([]);
      }
    }

    useEffect(() => {
      api.get('transactions').then(res => setTransactions(res.data));
    }, []);

    return (
      <a.div style={props}>
        <InnerHeader>
          <BackButton onClick={() => animateSummary()}>
            <img src={BackImg} alt="Return" />
          </BackButton>
          <FilterContainer>
            <Filter
              state={filterInOutCome}
              onClick={() => changeFilterInOutCome()}
            >
              <svg
                width="21"
                height="29"
                viewBox="0 0 21 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="21"
                  height="29"
                  rx="3"
                />
                <path d="M9.9814 21.596V20H7.1394C6.67273 20 6.27607 19.8367 5.9494 19.51C5.62273 19.1833 5.4594 18.7867 5.4594 18.32V17.928H6.5934V18.32C6.5934 18.4693 6.64473 18.6 6.7474 18.712C6.8594 18.8147 6.99007 18.866 7.1394 18.866H9.9814V15.534H7.1394C6.67273 15.534 6.27607 15.3707 5.9494 15.044C5.62273 14.708 5.4594 14.3113 5.4594 13.854V11.6C5.4594 11.1333 5.62273 10.7367 5.9494 10.41C6.27607 10.0833 6.67273 9.92 7.1394 9.92H9.9814V8.31H11.1294V9.92H13.9434C14.4101 9.92 14.8114 10.0833 15.1474 10.41C15.4927 10.7367 15.6561 11.1333 15.6374 11.6L15.6234 11.992H14.4894V11.614C14.4894 11.4647 14.4334 11.334 14.3214 11.222C14.2187 11.11 14.0927 11.054 13.9434 11.054H11.1294V14.372H13.9434C14.4101 14.372 14.8114 14.54 15.1474 14.876C15.4834 15.2027 15.6514 15.5993 15.6514 16.066V18.32C15.6514 18.7867 15.4881 19.1833 15.1614 19.51C14.8347 19.8367 14.4381 20 13.9714 20H11.1294V21.596H9.9814ZM7.1394 14.386H9.9814V11.054H7.1394C6.99007 11.054 6.8594 11.11 6.7474 11.222C6.64473 11.3247 6.5934 11.4507 6.5934 11.6V13.854C6.5934 14.0033 6.64473 14.1293 6.7474 14.232C6.8594 14.3347 6.99007 14.386 7.1394 14.386ZM11.1294 18.866L13.9574 18.852C14.0974 18.852 14.2187 18.8007 14.3214 18.698C14.4334 18.586 14.4894 18.4553 14.4894 18.306V16.066C14.4894 15.9167 14.4334 15.7907 14.3214 15.688C14.2094 15.576 14.0834 15.52 13.9434 15.52H11.1294V18.866Z" />
              </svg>
            </Filter>
            <Filter
              state={filterTitle}
              onClick={() => changeFilterTitle()}
            >
              <svg
                width="21"
                height="29"
                viewBox="0 0 21 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="21"
                  height="29"
                  rx="3"
                />
                <path
                  className="letterA"
                  d="M7.62025 14V9.28C7.62025 8.992 7.72158 8.74667 7.92425 8.544C8.12692 8.34133 8.37225 8.24 8.66025 8.24H12.3323C12.6203 8.24 12.8656 8.34133 13.0683 8.544C13.2763 8.74667 13.3803 8.992 13.3803 9.28V14H12.5083V11.984H8.48425V14H7.62025ZM8.48425 11.12H12.5083V9.4C12.5083 9.28267 12.4869 9.20533 12.4443 9.168C12.4069 9.12533 12.3296 9.104 12.2123 9.104H8.78025C8.66292 9.104 8.58292 9.12533 8.54025 9.168C8.50292 9.20533 8.48425 9.28267 8.48425 9.4V11.12Z"
                />
                <path
                  className="letterZ"
                  d="M7.62284 21V19.968L12.2228 16.104H7.62284V15.24H13.3828V16.272L8.78284 20.136H13.3828V21H7.62284Z"
                />
              </svg>
            </Filter>
            <Filter
              state={filterValue}
              onClick={() => changeFilterValue()}
            >
              <svg
                width="21"
                height="29"
                viewBox="0 0 21 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="21"
                  height="29"
                  rx="3"
                />
                <path
                  className="up"
                  d="M11.5304 7.46967C11.2375 7.17678 10.7626 7.17678 10.4697 7.46967L5.69672 12.2427C5.40383 12.5356 5.40383 13.0104 5.69672 13.3033C5.98961 13.5962 6.46449 13.5962 6.75738 13.3033L11 9.06066L15.2427 13.3033C15.5356 13.5962 16.0104 13.5962 16.3033 13.3033C16.5962 13.0104 16.5962 12.5356 16.3033 12.2427L11.5304 7.46967ZM11.75 8.5V8H10.25V8.5H11.75Z"
                />
                <path
                  className="down"
                  d="M10.4696 21.5303C10.7625 21.8232 11.2374 21.8232 11.5303 21.5303L16.3033 16.7573C16.5962 16.4644 16.5962 15.9896 16.3033 15.6967C16.0104 15.4038 15.5355 15.4038 15.2426 15.6967L11 19.9393L6.75733 15.6967C6.46443 15.4038 5.98958 15.4038 5.69668 15.6967C5.40378 15.9896 5.40378 16.4644 5.69668 16.7573L10.4696 21.5303ZM10.25 20.5V21L11.75 21V20.5L10.25 20.5Z"
                />
              </svg>
            </Filter>
          </FilterContainer>
        </InnerHeader>
        <Content>
          {!transactionsWithFilters || transactionsWithFilters.length === 0 ?
            (
              <Wrapper>
                {transactions.map(transaction => (
                  <Info key={transaction.id}>
                    <ContentName>{transaction.name}</ContentName>
                    <ContentValue className={transaction.type}>
                      {transaction.type === 'income' ?
                        (
                          `+ ${toBRL(transaction.amount)}`
                        ) : (
                          `- ${toBRL(transaction.amount)}`
                        )
                      }
                    </ContentValue>
                    <SecondaryContainer>
                      <ContentSecondary>{transaction.category}</ContentSecondary>
                      <ContentSecondary>{toPtBR(transaction.created_at)}</ContentSecondary>
                    </SecondaryContainer>
                  </Info>
                ))}
              </Wrapper>
            ) : (
              <Wrapper>
                {transactionsWithFilters.map(transaction => (
                  <Info key={transaction.id}>
                    <ContentName>{transaction.name}</ContentName>
                    <ContentValue className={transaction.type}>
                      {transaction.type === 'income' ?
                        (
                          `+ ${toBRL(transaction.amount)}`
                        ) : (
                          `- ${toBRL(transaction.amount)}`
                        )
                      }
                    </ContentValue>
                    <SecondaryContainer>
                      <ContentSecondary>{transaction.category}</ContentSecondary>
                      <ContentSecondary>{toPtBR(transaction.created_at)}</ContentSecondary>
                    </SecondaryContainer>
                  </Info>
                ))}
              </Wrapper>
            )
          }
        </Content>
      </a.div>
    );
  }