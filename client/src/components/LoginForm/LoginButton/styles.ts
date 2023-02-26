import styled from "styled-components";

export const Button = styled.button`
  width: 80%;
  height: 2.2rem;
  outline: none;
  border: none;

  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 0.9rem;
  color: white;

  background-color: var(--dark-blue);
  cursor: pointer;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.2);
  }
`;
