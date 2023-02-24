import { LoginForm } from "../../components/LoginForm";

import PlusImage from "../../assets/image.png";

import {
  Container,
  Content,
  Title,
  ImageContent,
  FormContent,
  Image,
} from "./styles";

export const LoginPage = () => {
  return (
    <Container>
      <Content>
        <ImageContent>
          <Image src={PlusImage} />
        </ImageContent>
        <FormContent>
          <LoginForm />
        </FormContent>
      </Content>
    </Container>
  );
};
