import { ITransactionData } from '../services/mirage';

export const sortByIncome = (transactions: Array<ITransactionData>) => {
  return transactions.filter(transaction => transaction.type === 'income');
}

export const sortByOutcome = (transactions: Array<ITransactionData>) => {
  return transactions.filter(transaction => transaction.type === 'outcome');
}

export const sortByAmountAsc = (transactionA: ITransactionData, transactionB: ITransactionData) => {
  let amountA = transactionA.amount;
  let amountB = transactionB.amount;

  if (transactionA.type === 'outcome') amountA *= -1;
  if (transactionB.type === 'outcome') amountB *= -1;

  return amountB - amountA;
}

export const sortByAmountDesc = (transactionA: ITransactionData, transactionB: ITransactionData) => {
  let amountA = transactionA.amount;
  let amountB = transactionB.amount;

  if (transactionA.type === 'outcome') amountA *= -1;
  if (transactionB.type === 'outcome') amountB *= -1;

  return amountA - amountB;
}

export const sortByNameAsc = (transactionA: ITransactionData, transactionB: ITransactionData) => {
  return transactionA.name.localeCompare(transactionB.name);
}

export const sortByNameDesc = (transactionA: ITransactionData, transactionB: ITransactionData) => {
  return transactionB.name.localeCompare(transactionA.name);
}