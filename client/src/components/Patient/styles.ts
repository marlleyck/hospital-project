import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--bg-gray-500);
  border-radius: 10px;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const Title = styled.h3`
  font-family: "Roboto", sans-serif;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  padding: 10px;
`;

export const Description = styled.p`
  font-family: "Roboto", sans-serif;
`;
