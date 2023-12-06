import styled from "styled-components";

const Input = styled.input`
  height: 40px;
  width: 100%;
  max-width: 250px;
  border: none;
  background-color: ${({ theme }) => theme.bginput};
  border-radius: 16px;
  margin: 8px 0px;
  padding-left: 8px;
  box-sizing: border-box;

  &:focus-visible {
    outline-color: ${({ theme }) => theme.outLineInpiut};
  }
`;

export default Input;
