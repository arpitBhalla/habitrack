import HabitProvider from "../../context/HabitContext";
import Dashboard from "./Dashboard";

export default function ActionAreaCard() {
  return (
    <HabitProvider>
      <Dashboard />
    </HabitProvider>
  );
}
