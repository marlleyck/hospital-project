import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { SideBar } from "../../components/SideBar";

import { PatientType } from "../../@types/PatientType";

import { Body, Container, Content, Info, InfoContent } from "./styles";
import { AddPatientForm } from "../../components/AddPatientForm";

type PatientPageProps = {
  name?: string;
  weight?: string;
  height?: string;
  imc?: string;
  status?: string;
  bloodType?: string;
  doctor?: string;
};

export const PatientPage = ({ name }: PatientPageProps) => {
  const [patient, setPatient] = useState<PatientType>();

  const appContext = useContext(AppContext);

  const { id } = useParams();

  useEffect(() => {
    const getPatient = async () => {
      const patientResponse = await api.get(`/patient/${id}`);

      setPatient(patientResponse.data.patient);

      appContext.setPatientName(patientResponse.data.patient.name);
      appContext.setPatientWeight(patientResponse.data.patient.weight);
      appContext.setPatientHeight(patientResponse.data.patient.height);
      appContext.setPatientImc(patientResponse.data.patient.imc);
      appContext.setPatientStatus(
        patientResponse.data.patient.status_description
      );
      appContext.setPatientBloodType(patientResponse.data.patient.blood_type);
      appContext.setPatientDoctor(patientResponse.data.patient.doctor);
    };

    getPatient();
  }, []);

  return (
    <>
      {patient && (
        <Container>
          <SideBar />
          <Content>
            <AddPatientForm />
          </Content>
        </Container>
      )}
    </>
  );
};
