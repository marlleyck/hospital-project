import { ContainerButton } from "./styles";

type ButtonProps = {
  title: string;
};

export const Button = ({ title }: ButtonProps) => {
  return <ContainerButton type="button">{title}</ContainerButton>;
};
