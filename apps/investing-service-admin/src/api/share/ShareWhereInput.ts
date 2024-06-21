import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PortfolioListRelationFilter } from "../portfolio/PortfolioListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type ShareWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  portfolios?: PortfolioListRelationFilter;
  price?: FloatNullableFilter;
  transactions?: TransactionListRelationFilter;
};
