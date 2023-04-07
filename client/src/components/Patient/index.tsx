import { useNavigate } from "react-router-dom";

import { Container, Content, Description, Title } from "./styles";

type PatientProps = {
  id: string;
  name: string;
  doctor: string;
  blood: string;
};

export const Patient = ({ id, name, doctor, blood }: PatientProps) => {
  const navigate = useNavigate();

  const handleOpenPatientInfos = () => {
    navigate(`/patient/${id}`);
  };

  return (
    <Container onClick={handleOpenPatientInfos}>
      <Content>
        <Title>Nome</Title>
        <Description>{name}</Description>
      </Content>
      <Content>
        <Title>Doutor</Title>
        <Description>{doctor}</Description>
      </Content>
      <Content>
        <Title>Sangue</Title>
        <Description>{blood}</Description>
      </Content>
    </Container>
  );
};
