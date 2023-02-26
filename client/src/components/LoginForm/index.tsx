import { HeaderLoginForm } from "./HeaderLoginForm";
import { MainLoginForm } from "./MainLoginForm";
import { FooterLoginForm } from "./FooterLoginForm";

import { Container } from "./styles";

export const LoginForm = () => {
  return (
    <Container>
      <HeaderLoginForm />
      <MainLoginForm />
      <FooterLoginForm />
    </Container>
  );
};
