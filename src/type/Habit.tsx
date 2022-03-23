export type actionType = "complete" | "skip" | "fail";
export type HabitType = {
  name: string;
  description?: string;
  goal?: string;
  remainder?: "";
  actions: Record<string, actionType>;
};
