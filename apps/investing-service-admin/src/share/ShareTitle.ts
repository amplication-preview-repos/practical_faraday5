import { Share as TShare } from "../api/share/Share";

export const SHARE_TITLE_FIELD = "name";

export const ShareTitle = (record: TShare): string => {
  return record.name?.toString() || String(record.id);
};
