import * as React from "react";
import { useUser } from "@context/Auth";
import { supabase } from "@utils/supabaseClient";
import { HabitType } from "@type/Habit";
import Loading from "@screens/Dashboard/Loading";

export default function ActionAreaCard({ children }) {
  const [habits, setHabits] = React.useState<HabitType[]>([]);
  const [loading, setLoading] = React.useState(true);
  const { authUser } = useUser();

  const saveHabit = async (habits: HabitType[]) => {
    setHabits(habits);
    const { data, error } = await supabase
      .from("userProfiles")
      .update({ habits: JSON.stringify(habits) })
      .match({ id: authUser?.id });
  };

  const fetchHabits = async () => {
    const { data, error } = await supabase
      .from("userProfiles")
      .select()
      .eq("id", authUser?.id);
    if (data) {
      const habits = JSON.parse(data[0].habits) as HabitType[];
      setHabits(habits);
      console.log(habits);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    fetchHabits();
  }, []);
  if (loading) return <Loading />;

  return (
    <HabitContext.Provider value={{ habits, saveHabit }}>
      {children}
    </HabitContext.Provider>
  );
}
type HabitContext = {
  habits: HabitType[];
  saveHabit: (habits: HabitType[]) => void;
};

const HabitContext = React.createContext<HabitContext>({} as HabitContext);

export const useHabits = () => React.useContext(HabitContext);
