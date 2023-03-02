import { createContext } from "react";

import { AuthContextType } from "../@types/AuthContextType";

type AuthProviderProps = {
  children: JSX.Element;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
