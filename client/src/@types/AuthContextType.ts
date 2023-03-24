import { UserType } from "./../../../server/src/@types/UserType";

export type AuthContextType = {
  authorized: boolean | null;
  user: UserType | undefined;
  idUser: string;
  setIdUser: (id: string) => void;
  emailUser: string;
  setEmailUser: (email: string) => void;
  passwordUser: string;
  setPasswordUser: (password: string) => void;
  token: string;
  setToken: (token: string) => void;
};
