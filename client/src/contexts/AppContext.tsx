import { createContext } from "react";

import { AppContextType } from "../@types/AppContextType";

type AppContextProviderProps = {
  children: JSX.Element;
};

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
