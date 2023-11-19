import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #0066ff;
  color: #fff;
  width: 10em;
  height: 4.9em;
  border: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #0000ff;
    transition: all 0.2s ease-in-out;
    border-radius: 15px;
  }
`;
