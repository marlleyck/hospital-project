import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Content = styled.div`
  width: 80%;
  height: 100%;

  position: absolute;
  left: 20%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--bg-gray-500);
`;
