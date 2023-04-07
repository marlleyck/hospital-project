import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { SideBar } from "../../components/SideBar";
import { Patient } from "../../components/Patient";

import { Container, PatientsContent } from "./styles";

export const PatientsPage = () => {
  const { patients } = useContext(AppContext);

  return (
    <Container>
      <SideBar />
      <PatientsContent>
        <>
          {patients &&
            patients.map((patient: any) => (
              <Patient
                key={patient.id}
                id={patient.id}
                name={patient.name}
                doctor={patient.doctor}
                blood={patient.blood_type}
              />
            ))}
        </>
      </PatientsContent>
    </Container>
  );
};
