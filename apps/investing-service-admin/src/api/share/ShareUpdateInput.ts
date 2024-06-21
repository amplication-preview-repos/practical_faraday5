import { PortfolioUpdateManyWithoutSharesInput } from "./PortfolioUpdateManyWithoutSharesInput";
import { TransactionUpdateManyWithoutSharesInput } from "./TransactionUpdateManyWithoutSharesInput";

export type ShareUpdateInput = {
  name?: string | null;
  portfolios?: PortfolioUpdateManyWithoutSharesInput;
  price?: number | null;
  transactions?: TransactionUpdateManyWithoutSharesInput;
};
