import { UserType } from "./../../../server/src/@types/UserType";

export type AuthContextType = {
  authorized: boolean | null;
  setAuthorized: (authorized: boolean) => void;
  user: UserType | undefined;
  idUser: string;
  setIdUser: (id: string) => void;
  nameUser: string;
  setNameUser: (name: string) => void;
  emailUser: string;
  setEmailUser: (email: string) => void;
  passwordUser: string;
  setPasswordUser: (password: string) => void;
  confirmPasswordUser: string;
  setConfirmPasswordUser: (confirmPassword: string) => void;
  token: string;
  setToken: (token: string) => void;
};
