import {
  WithProtectedPage,
  useUser,
} from "@arpitbhalla/habitrack/context/Auth";
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
