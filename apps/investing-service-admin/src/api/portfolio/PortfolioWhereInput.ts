import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ShareWhereUniqueInput } from "../share/ShareWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PortfolioWhereInput = {
  id?: StringFilter;
  quantity?: IntNullableFilter;
  share?: ShareWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
