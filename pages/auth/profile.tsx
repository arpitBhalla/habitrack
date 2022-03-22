import { WithProtectedPage, useUser } from "@context/Auth";
import dynamic from "next/dynamic";

const Profile = dynamic(() => import("@screens/Profile"));

function Home() {
  return <Profile />;
}

export default WithProtectedPage(Home, ["admin", "member"]);
