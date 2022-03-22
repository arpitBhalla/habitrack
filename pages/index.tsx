import { useState, useEffect } from "react";
// import Dashboard from "@components/Home";
import { Header } from "@layouts";
import { supabase } from "@utils/supabaseClient";
import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import { WithProtectedPage, useUser } from "@context/Auth";
import dynamic from "next/dynamic";

// const S = dynamic(() => import("@components/Home"));

function Home() {
  return (
    <>
      <Header />
      {/* <S /> */}
      {/* <Dashboard /> */}
    </>
  );
}

export default WithProtectedPage(Home, ["admin", "member"]);
