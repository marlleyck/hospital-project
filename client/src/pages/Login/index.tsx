import { LoginForm } from "../../components/LoginForm";

import { Container, Content, Title, ImageContent, FormContent } from "./styles";

export const LoginPage = () => {
  return (
    <Container>
      <Content>
        <ImageContent>
          <Title>Imagem aqui</Title>
        </ImageContent>
        <FormContent>
          {/* <Title>Form aqui</Title> */}
          <LoginForm />
        </FormContent>
      </Content>
    </Container>
  );
};
