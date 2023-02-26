import { useNavigate } from "react-router-dom";

import { Container, Content, Description } from "./styles";

export const FooterLoginForm = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Description onClick={() => navigate("/register")}>
          Registrar-se
        </Description>
      </Content>
    </Container>
  );
};
