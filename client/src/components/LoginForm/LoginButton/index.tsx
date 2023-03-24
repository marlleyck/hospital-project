import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";

import { Button } from "./styles";

export const LoginButton = () => {
  const { loginUser } = useContext(AppContext);

  return (
    <Button onClick={loginUser} type="button">
      Entrar
    </Button>
  );
};
