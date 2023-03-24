import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "./AuthContext";

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

  const [patients, setPatients] = useState<any>();
  const { emailUser, passwordUser, token, setToken, idUser, setIdUser } =
    useContext(AuthContext);

  const fetchPatients = async () => {
    const patientsResponse = await api.get("/patients");

    setPatients(patientsResponse.data.patients);
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const createPatient = async () => {
    const patient = {
      id: uuidv4(),
      name: patientName,
      weight: patientWeight,
      height: patientHeight,
      imc: patientImc,
      status_description: patientStatus,
      blood_type: patientBloodType,
      doctor: patientDoctor,
      userId: "2545gasfdg-ggasgsg125",
    };

    const response = await api.post("/user/patient", patient);

    setPatientName("");
    setPatientWeight("");
    setPatientHeight("");
    setPatientImc("");
    setPatientStatus("");
    setPatientBloodType("");
    setPatientDoctor("");

    fetchPatients();
    console.log(response);
  };

  const loginUser = async () => {
    const response = await api.post("/auth/user", {
      email: emailUser,
      password: passwordUser,
    });

    setToken(response.data.token);
    setIdUser(response.data.id);
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
        patients,
        loginUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
