import { Share } from "../share/Share";
import { User } from "../user/User";

export type Portfolio = {
  createdAt: Date;
  id: string;
  quantity: number | null;
  share?: Share | null;
  updatedAt: Date;
  user?: User | null;
};
