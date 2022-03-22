import { WithProtectedPage, useUser } from "@context/Auth";
import dynamic from "next/dynamic";

const Explore = dynamic(() => import("@screens/Explore"));

function Home() {
  return <Explore />;
}

export default WithProtectedPage(Home, ["admin", "member"]);
