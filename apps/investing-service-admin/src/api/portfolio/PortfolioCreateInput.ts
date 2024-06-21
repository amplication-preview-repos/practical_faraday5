import { ShareWhereUniqueInput } from "../share/ShareWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PortfolioCreateInput = {
  quantity?: number | null;
  share?: ShareWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
