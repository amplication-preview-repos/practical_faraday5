import { SortOrder } from "../../util/SortOrder";

export type PortfolioOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  quantity?: SortOrder;
  shareId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
