import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

import { AuthContextType } from "../@types/AuthContextType";
import { UserType } from "../@types/UserType";

type AuthProviderProps = {
  children: JSX.Element;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserType>();
  const [idUser, setIdUser] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [confirmPasswordUser, setConfirmPasswordUser] = useState("");

  const [token, setToken] = useState("");
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const tokenStorage =
        JSON.parse(localStorage.getItem("@hospital:token") || "[]") ?? [];

      console.log(tokenStorage);

      if (typeof tokenStorage === "string") {
        const response = await api.get("/user", {
          headers: {
            authorization: `Bearer ${tokenStorage}`,
          },
        });
        setAuthorized(true);
        setUser(response.data);
        navigate("/patients");
        setToken(tokenStorage);

        console.log(response);
      } else {
        setAuthorized(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        authorized,
        idUser,
        setIdUser,
        nameUser,
        setNameUser,
        emailUser,
        setEmailUser,
        passwordUser,
        setPasswordUser,
        confirmPasswordUser,
        setConfirmPasswordUser,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
