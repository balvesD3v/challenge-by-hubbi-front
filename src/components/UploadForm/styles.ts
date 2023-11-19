/* eslint-disable @typescript-eslint/no-unused-vars */

import styled from "styled-components";

export const BackgroundColor = styled.div`
  background-color: #112f66;
  color: #fff;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FormStyled = styled.form`
  background-color: #fff;
  height: 5em;
  padding: 1em;
  color: #000;
  margin-top: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivFormStyled = styled.div`
  display: flex;
  height: 10em;
  gap: 2em;

  justify-content: center;
  align-items: center;
`;

export const InputStyled = styled.input.attrs({ type: "file" })`
  display: none;
`;

export const LabelStyled = styled.label`
  background-color: #0066ff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 10em;
  height: 4em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0000ff;
    transition: all 0.2s ease-in-out;
    border-radius: 15px;
  }
`;

export const TransactionsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Error = styled.p`
  color: red;
`;
