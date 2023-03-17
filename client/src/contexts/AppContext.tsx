import { createContext, useState } from "react";

import { AppContextType } from "../@types/AppContextType";
import { PatientType } from "../@types/PatientType";

type AppContextProviderProps = {
  children: JSX.Element;
};

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [patientName, setPatientName] = useState("");
  const [patientWeight, setPatientWeight] = useState("");
  const [patientHeight, setPatientHeight] = useState("");
  const [patientImc, setPatientImc] = useState("");
  const [patientStatus, setPatientStatus] = useState("");
  const [patientBloodType, setPatientBloodType] = useState("");
  const [patientDoctor, setPatientDoctor] = useState("");

  const createPatient = () => {
    const patient: PatientType = {
      id: "teste1285",
      name: patientName,
      weight: patientWeight,
      height: patientHeight,
      imc: patientImc,
      status_description: patientStatus,
      blood_type: patientBloodType,
      doctor: patientDoctor,
    };
  };

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
        createPatient,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
