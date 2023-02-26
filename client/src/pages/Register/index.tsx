import { RegisterForm } from "../../components/RegisterForm";

import PlusImage from "../../assets/image.png";

import { Container, Content, ImageContent, Image, FormContent } from "./styles";

export const RegisterPage = () => {
  return (
    <Container>
      <Content>
        <ImageContent>
          <Image src={PlusImage} />
        </ImageContent>
        <FormContent>
          <RegisterForm />
        </FormContent>
      </Content>
    </Container>
  );
};
