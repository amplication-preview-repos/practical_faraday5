import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PortfolioListRelationFilter } from "../portfolio/PortfolioListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { WalletListRelationFilter } from "../wallet/WalletListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  portfolios?: PortfolioListRelationFilter;
  transactions?: TransactionListRelationFilter;
  username?: StringFilter;
  wallets?: WalletListRelationFilter;
};
