import { Share } from "../share/Share";
import { User } from "../user/User";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  id: string;
  price: number | null;
  share?: Share | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
