import { v4 as uuid } from 'uuid';
import { createServer, Request } from 'miragejs';

export interface ITransactionData {
  id: string;
  name: string;
  amount: number;
  created_at: Date;
  category: string;
  type: 'income' | 'outcome';
}

export function create() {
  return createServer({
    routes() {
      this.namespace = 'api';
      this.get('transactions', () => createTransactionsData());
      this.post('transactions', (schema, req) => createNewTransaction(req));
    }
  });
}

const createTransactionsData = (): ITransactionData[] => {
  return [
    {
      id: uuid(),
      amount: 3500,
      name: "Salary",
      type: 'income',
      category: 'Job',
      created_at: new Date(2021, 6, 10),
    },
    {
      id: uuid(),
      amount: 1500,
      name: "Portfolio",
      type: 'income',
      category: 'Freela',
      created_at: new Date(2021, 6, 12),
    },
    {
      id: uuid(),
      amount: 1200,
      name: "House Rent",
      type: 'outcome',
      category: 'Bills',
      created_at: new Date(2021, 6, 13),
    },
    {
      id: uuid(),
      amount: 200,
      name: "Shoes",
      type: 'outcome',
      category: 'Gym',
      created_at: new Date(2021, 6, 13),
    },
    {
      id: uuid(),
      amount: 150,
      name: "RPG Master Guide",
      type: 'outcome',
      category: 'Hobby',
      created_at: new Date(2021, 6, 15),
    },
    {
      id: uuid(),
      amount: 2000,
      name: "APP Mobile",
      type: 'income',
      category: 'Freela',
      created_at: new Date(2021, 6, 20),
    },
    {
      id: uuid(),
      amount: 500,
      name: 'Water Bill',
      type: 'outcome',
      category: 'Bills',
      created_at: new Date(2021, 6, 20),
    },
    /*{
      id: uuid(),
      amount: 5000,
      name: 'Car Repairs',
      type: 'outcome',
      category: 'Bills',
      created_at: new Date(2021, 6, 25),
    }*/
  ]
}

const createNewTransaction = (req: Request) => {
  console.info(req);
  return req;
}