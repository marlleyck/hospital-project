import { HeaderRegisterForm } from "./HeaderRegisterForm";
import { MainRegisterForm } from "./MainRegisterForm";
import { FooterRegisterForm } from "./FooterRegisterForm";

import { Container } from "./styles";

export const RegisterForm = () => {
  return (
    <Container>
      <HeaderRegisterForm />
      <MainRegisterForm />
      <FooterRegisterForm />
    </Container>
  );
};
