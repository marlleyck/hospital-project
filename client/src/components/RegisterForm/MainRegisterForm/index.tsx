import { RegisterButton } from "../RegisterButton";

import { Main, Content, Input, InfoContent, TitleContent } from "./styles";

export const MainRegisterForm = () => {
  return (
    <Main>
      <Content>
        <InfoContent>
          <TitleContent>Nome</TitleContent>
          <Input type="text" placeholder="Marlleyck Nathan" />
        </InfoContent>

        <InfoContent>
          <TitleContent>Email</TitleContent>
          <Input type="email" placeholder="teste@teste.com" />
        </InfoContent>

        <InfoContent>
          <TitleContent>Senha</TitleContent>
          <Input type="password" placeholder="*******" />
        </InfoContent>

        <InfoContent>
          <TitleContent>Confirmar senha</TitleContent>
          <Input type="password" placeholder="*******" />
        </InfoContent>

        <RegisterButton />
      </Content>
    </Main>
  );
};
