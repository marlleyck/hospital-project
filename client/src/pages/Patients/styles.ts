import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
`;

export const PatientsContent = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  position: absolute;
  left: 20%;

  padding: 5px 0px;

  gap: 5px;

  overflow: auto;
`;
