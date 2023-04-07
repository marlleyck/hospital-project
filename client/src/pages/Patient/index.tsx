import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { SideBar } from "../../components/SideBar";

import { PatientType } from "../../@types/PatientType";

import { Body, Container, Content, Info, InfoContent } from "./styles";

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

  const { id } = useParams();

  useEffect(() => {
    const getPatient = async () => {
      const patientResponse = await api.get(`/patient/${id}`);

      setPatient(patientResponse.data.patient);
    };

    getPatient();
  }, []);

  return (
    <>
      {patient && (
        <Container>
          <SideBar />
          <Content>
            <Body>
              <InfoContent>
                <Info>{patient?.name}</Info>
              </InfoContent>
            </Body>
          </Content>
        </Container>
      )}
    </>
  );
};
