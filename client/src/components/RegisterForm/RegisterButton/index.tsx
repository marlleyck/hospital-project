import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";

import { Button } from "./styles";

export const RegisterButton = () => {
  const { registerUser } = useContext(AppContext);

  return (
    <Button type="button" onClick={registerUser}>
      Registrar
    </Button>
  );
};
