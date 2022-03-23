import { WithProtectedPage, useUser } from "@context/Auth";
import dynamic from "next/dynamic";

const Pomodoro = dynamic(() => import("@screens/Pomodoro"));

function Home() {
  return (
    <>
      <Pomodoro />
    </>
  );
}

export default WithProtectedPage(Home, ["admin", "member"]);
