import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ShareWhereUniqueInput } from "../share/ShareWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: IntNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  share?: ShareWhereUniqueInput;
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
};
