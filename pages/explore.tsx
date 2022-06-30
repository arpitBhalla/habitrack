import {
  WithProtectedPage,
  useUser,
} from "@arpitbhalla/habitrack/context/Auth";
import dynamic from "next/dynamic";

const Explore = dynamic(() => import("@screens/Explore"));

function Home() {
  return <Explore />;
}

export default WithProtectedPage(Home, ["admin", "member"]);
