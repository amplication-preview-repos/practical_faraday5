import { ShareWhereUniqueInput } from "../share/ShareWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  price?: number | null;
  share?: ShareWhereUniqueInput | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
