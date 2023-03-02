import { createContext, useState } from "react";

import { AuthContextType } from "../@types/AuthContextType";

type AuthProviderProps = {
  children: JSX.Element;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState();

  const [token, setToken] = useState("");
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
