import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 8%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-radius: 15px 15px 0 0;

  padding: 25px;

  background-color: var(--bg-gray-300);
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: var(--form-title);
`;
