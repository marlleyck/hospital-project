import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
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
  const { authorized } = useContext(AuthContext);

  return (
    <Container>
      <>
        {authorized !== null && !authorized && (
          <Content>
            <ImageContent>
              <Image src={PlusImage} />
            </ImageContent>
            <FormContent>
              <LoginForm />
            </FormContent>
          </Content>
        )}
      </>
    </Container>
  );
};
