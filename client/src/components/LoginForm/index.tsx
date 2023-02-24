import { HeaderLoginForm } from "./HeaderLoginForm";
import { MainLoginForm } from "./MainLoginForm";

import { Container } from "./styles";

export const LoginForm = () => {
  return (
    <Container>
      <HeaderLoginForm />
      <MainLoginForm />
    </Container>
  );
};
