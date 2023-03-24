import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { LoginButton } from "../LoginButton";

import { Main, Content, Input, InfoContent, TitleContent } from "./styles";

export const MainLoginForm = () => {
  const { emailUser, setEmailUser, passwordUser, setPasswordUser } =
    useContext(AuthContext);

  return (
    <Main>
      <Content>
        <InfoContent>
          <TitleContent>Email</TitleContent>
          <Input
            type="email"
            placeholder="teste@teste.com"
            onChange={(e: any) => setEmailUser(e.target.value)}
            value={emailUser}
          />
        </InfoContent>

        <InfoContent>
          <TitleContent>Senha</TitleContent>
          <Input
            type="password"
            placeholder="*******"
            onChange={(e: any) => setPasswordUser(e.target.value)}
            value={passwordUser}
          />
        </InfoContent>

        <LoginButton />
      </Content>
    </Main>
  );
};
