import { HeaderRegisterForm } from "./HeaderRegisterForm";
import { MainRegisterForm } from "./MainRegisterForm";

import { Container } from "./styles";

export const RegisterForm = () => {
  return (
    <Container>
      <HeaderRegisterForm />
      <MainRegisterForm />
    </Container>
  );
};
