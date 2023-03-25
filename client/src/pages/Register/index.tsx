import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { RegisterForm } from "../../components/RegisterForm";

import PlusImage from "../../assets/image.png";

import { Container, Content, ImageContent, Image, FormContent } from "./styles";

export const RegisterPage = () => {
  const { authorized, fetchUser } = useContext(AuthContext);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      {authorized !== null && !authorized && (
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
      )}
    </>
  );
};
