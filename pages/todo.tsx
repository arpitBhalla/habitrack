import { useState, useEffect } from "react";
import { WithProtectedPage, useUser } from "@context/Auth";
import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import("@screens/Leaderboard"));

function Home() {
  return (
    <>
      <Dashboard />
    </>
  );
}

export default WithProtectedPage(Home, ["admin", "member"]);
