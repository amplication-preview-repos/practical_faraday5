import { PortfolioCreateNestedManyWithoutSharesInput } from "./PortfolioCreateNestedManyWithoutSharesInput";
import { TransactionCreateNestedManyWithoutSharesInput } from "./TransactionCreateNestedManyWithoutSharesInput";

export type ShareCreateInput = {
  name?: string | null;
  portfolios?: PortfolioCreateNestedManyWithoutSharesInput;
  price?: number | null;
  transactions?: TransactionCreateNestedManyWithoutSharesInput;
};
