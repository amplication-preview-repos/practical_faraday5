import { Portfolio } from "../portfolio/Portfolio";
import { JsonValue } from "type-fest";
import { Transaction } from "../transaction/Transaction";
import { Wallet } from "../wallet/Wallet";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  portfolios?: Array<Portfolio>;
  roles: JsonValue;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  username: string;
  wallets?: Array<Wallet>;
};
