import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  width: 250px;
  height: 40px;
  border-radius: 16px;
  margin: 8px;
  color: ${(props) => props.theme.lightText};
  background-color: ${(props) => props.theme.success};
  border: none;

  &:active {
    background-color: ${(props) => props.theme.darkSuccess};
  }
`;

export default Button;
