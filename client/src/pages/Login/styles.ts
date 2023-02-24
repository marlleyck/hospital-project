import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 80%;
  height: 80%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageContent = styled.aside`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 20px 0 0 20px;

  background-image: linear-gradient(140deg, #7fc7ff, #4673ff);

  box-shadow: 8px 8px 40px gray;
`;

export const FormContent = styled.aside`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0px 20px 20px 0;

  background-color: var(--bg-gray-300);

  box-shadow: 8px 8px 40px gray;
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  color: var(--form-title);
`;
