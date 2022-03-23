import { supabase } from "@utils/supabaseClient";
import { HabitType } from "@type/Habit";

export const saveHabit = (habits: HabitType[], id: string) => {
  return supabase
    .from("userProfiles")
    .update({ habits: JSON.stringify(habits) })
    .match({ id });
};
