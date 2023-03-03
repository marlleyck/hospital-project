import { SideBar } from "../../components/SideBar";
import { Patient } from "../../components/Patient";

import { Container, PatientsContent } from "./styles";

export const PatientsPage = () => {
  return (
    <Container>
      <SideBar />
      <PatientsContent>
        <Patient />
        <Patient />
      </PatientsContent>
    </Container>
  );
};
