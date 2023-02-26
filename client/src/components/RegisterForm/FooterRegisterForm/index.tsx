import { useNavigate } from "react-router-dom";

import { Container, Description } from "./styles";

export const FooterRegisterForm = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Description onClick={() => navigate("/login")}>Voltar</Description>
    </Container>
  );
};
