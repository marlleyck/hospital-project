import { SideBar } from "../../components/SideBar";
import { AddPatientForm } from "../../components/AddPatientForm";

import { Container, Content } from "./styles";

export const AddPatient = () => {
  return (
    <Container>
      <SideBar />
      <Content>
        <AddPatientForm />
      </Content>
    </Container>
  );
};
