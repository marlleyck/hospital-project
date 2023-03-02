import styled from "styled-components";

export const Container = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--dark-blue);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
`;

export const Title = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
