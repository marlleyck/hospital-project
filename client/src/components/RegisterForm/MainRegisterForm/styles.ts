import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: calc(100% - 8%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 30px;
`;

export const InfoContent = styled.div`
  width: 80%;
`;

export const TitleContent = styled.p`
  font-family: "Roboto", sans-serif;
  color: var(--blue);
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  outline: none;
  border: none;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #c1c5c9;

  &::placeholder {
    color: #c1c5c9;
  }
`;
