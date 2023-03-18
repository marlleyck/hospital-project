import { Container, Content, Description, Title } from "./styles";

type PatientProps = {
  name: string;
  doctor: string;
  blood: string;
};

export const Patient = ({ name, doctor, blood }: PatientProps) => {
  return (
    <Container>
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
