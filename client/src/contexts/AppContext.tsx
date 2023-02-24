import { createContext } from "react";

type AppContextProviderProps = {
  children: JSX.Element;
};

export const AppContext = createContext({});

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
