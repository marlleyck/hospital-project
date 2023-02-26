import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Description = styled.a`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: var(--dark-blue);
  cursor: pointer;
  user-select: none;

  &:hover {
    text-decoration: underline;
  }
`;
