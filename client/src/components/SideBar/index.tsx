import { useNavigate } from "react-router-dom";
import { Container, Content, Title } from "./styles";

export const SideBar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Content>
        <Title onClick={() => navigate("/home")}>Home</Title>
        <Title onClick={() => navigate("/addpatient")}>
          Adicionar Paciente
        </Title>
        <Title onClick={() => navigate("/patients")}>Pacientes</Title>
      </Content>
    </Container>
  );
};
