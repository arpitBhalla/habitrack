import { basePath } from "site.config";
import { TUserRole } from "@type/types";
import { User } from "@supabase/supabase-js";
import { supabase } from "@utils/supabaseClient";
import { useRouter } from "next/router";
import React from "react";

type TAuthState = User | undefined | null;

type TAuthContext = {
  authUser: TAuthState;
  // updateAuthUser: (user: TAuthState) => void;
};

export const AuthContext = React.createContext<TAuthContext>(
  {} as TAuthContext
);

/**
 * AuthProvider
 */
export const AuthProvider: React.FC = ({ children }) => {
  const [authUser, updateAuthUser] = React.useState<TAuthState>(
    supabase.auth.session()?.user
  );

  React.useEffect(() => {
    let authListener = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("auth state changed", session);
      updateAuthUser(session?.user);
    });
    return () => {
      authListener.data?.unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ authUser }}>{children}</AuthContext.Provider>
  );
  return <>{children}</>;
};

/**
 * withProtectedAuth
 */
export const WithProtectedPage =
  (
    Component: React.ComponentType,
    role: Array<TUserRole>,
    nonAuthPage = false
  ) =>
  () => {
    const router = useRouter();
    const { authUser } = React.useContext(AuthContext);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
      const isLoggedIn = Boolean(authUser);
      if (!isLoggedIn && nonAuthPage) {
        return setLoading(false);
      }
      if (isLoggedIn) {
        if (nonAuthPage) {
          router.push(`${basePath}`);
        } else {
          setLoading(false);
        }
      } else {
        router.push(`${basePath}auth/login`);
      }
    }, [authUser]);

    return <>{loading ? <>loading</> : <Component />}</>;
    return <Component />;
  };

export const useUser = () => React.useContext(AuthContext);
