import { createContext, useState } from "react";

import { AppContextType } from "../@types/AppContextType";

type AppContextProviderProps = {
  children: JSX.Element;
};

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [patientName, setPatientName] = useState("");
  const [patientWeight, setPatientWeight] = useState<number>();
  const [patientHeight, setPatientHeight] = useState<number>();
  const [patientImc, setPatientImc] = useState<number>();
  const [patientStatus, setPatientStatus] = useState("");
  const [patientBloodType, setPatientBloodType] = useState("");
  const [patientDoctor, setPatientDoctor] = useState("");

  return (
    <AppContext.Provider
      value={{
        patientName,
        setPatientName,
        patientWeight,
        setPatientWeight,
        patientHeight,
        setPatientHeight,
        patientImc,
        setPatientImc,
        patientStatus,
        setPatientStatus,
        patientBloodType,
        setPatientBloodType,
        patientDoctor,
        setPatientDoctor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
