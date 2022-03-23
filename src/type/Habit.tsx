export type actionType = "complete" | "skip" | "fail";
export type habit = {
  name: string;
  description?: string;
  goal?: string;
  remainder?: "";
  actions: Record<string, actionType>;
};
