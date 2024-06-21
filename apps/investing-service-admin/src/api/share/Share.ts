import { Portfolio } from "../portfolio/Portfolio";
import { Transaction } from "../transaction/Transaction";

export type Share = {
  createdAt: Date;
  id: string;
  name: string | null;
  portfolios?: Array<Portfolio>;
  price: number | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
