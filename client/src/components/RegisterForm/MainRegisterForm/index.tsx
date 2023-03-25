import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { RegisterButton } from "../RegisterButton";

import { Main, Content, Input, InfoContent, TitleContent } from "./styles";

export const MainRegisterForm = () => {
  const authContext = useContext(AuthContext);

  return (
    <Main>
      <Content>
        <InfoContent>
          <TitleContent>Nome</TitleContent>
          <Input
            type="text"
            placeholder="Marlleyck Nathan"
            onChange={(e: any) => authContext.setNameUser(e.target.value)}
            value={authContext.nameUser}
          />
        </InfoContent>

        <InfoContent>
          <TitleContent>Email</TitleContent>
          <Input
            type="email"
            placeholder="teste@teste.com"
            onChange={(e: any) => authContext.setEmailUser(e.target.value)}
            value={authContext.emailUser}
          />
        </InfoContent>

        <InfoContent>
          <TitleContent>Senha</TitleContent>
          <Input
            type="password"
            placeholder="*******"
            onChange={(e: any) => authContext.setPasswordUser(e.target.value)}
            value={authContext.passwordUser}
          />
        </InfoContent>

        <InfoContent>
          <TitleContent>Confirmar senha</TitleContent>
          <Input
            type="password"
            placeholder="*******"
            onChange={(e: any) =>
              authContext.setConfirmPasswordUser(e.target.value)
            }
            value={authContext.confirmPasswordUser}
          />
        </InfoContent>

        <RegisterButton />
      </Content>
    </Main>
  );
};
