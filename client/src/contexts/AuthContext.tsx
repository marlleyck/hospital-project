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
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");

  const [token, setToken] = useState("");
  const [authorized, setAuthorized] = useState<boolean | null>(true);

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
        emailUser,
        setEmailUser,
        passwordUser,
        setPasswordUser,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
