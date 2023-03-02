import { createContext, useState } from "react";

import { AuthContextType } from "../@types/AuthContextType";
import { UserType } from "../@types/UserType";

type AuthProviderProps = {
  children: JSX.Element;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserType>();

  const [token, setToken] = useState("");
  const [authorized, setAuthorized] = useState<boolean | null>(true);

  return (
    <AuthContext.Provider value={{ authorized }}>
      {children}
    </AuthContext.Provider>
  );
};
