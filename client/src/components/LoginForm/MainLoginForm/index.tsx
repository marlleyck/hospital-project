import { LoginButton } from "../LoginButton";

import { Main, Content, Input, InfoContent, TitleContent } from "./styles";

export const MainLoginForm = () => {
  return (
    <Main>
      <Content>
        <InfoContent>
          <TitleContent>Email</TitleContent>
          <Input type="email" placeholder="teste@teste.com" />
        </InfoContent>

        <InfoContent>
          <TitleContent>Senha</TitleContent>
          <Input type="password" placeholder="*******" />
        </InfoContent>

        <LoginButton />
      </Content>
    </Main>
  );
};
