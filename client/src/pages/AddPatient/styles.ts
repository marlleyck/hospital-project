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

export const Body = styled.div`
  width: 60%;
  height: 90%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  background-color: white;
  border-radius: 10px;
  box-shadow: 3px 2px 25px gray;
`;

export const FieldsContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  font-family: "Roboto", sans-serif;
  color: black;

  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid gray;
  padding: 10px;
  border-radius: 10px;

  &:focus {
    border: 1px solid var(--dark-blue);
  }
`;
