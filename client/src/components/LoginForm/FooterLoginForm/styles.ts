import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 20%;

  /* border: 1px solid red; */

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div``;

export const Description = styled.a`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: var(--dark-blue);

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
