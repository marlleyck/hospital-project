import { createContext, useState } from "react";
import axios from "axios";

import { AppContextType } from "../@types/AppContextType";

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

  const createPatient = async () => {
    const patient = {
      id: "teste1285",
      name: patientName,
      weight: patientWeight,
      height: patientHeight,
      imc: patientImc,
      status_description: patientStatus,
      blood_type: patientBloodType,
      doctor: patientDoctor,
      userId: "2545gasfdg-ggasgsg125",
    };

    console.log(patient);

    const response = await axios.post(
      "http://localhost:3000/api/user/patient",
      patient
    );

    console.log(response);
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
