import styled from "styled-components";

interface ButtonProps {
  rounded?: boolean;
}

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  width: 250px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin: 8px;
  color: ${(props) => props.theme.lightText};
  background-color: ${(props) => props.theme.success};
  border: none;
  ${({ rounded }) =>
    rounded &&
    `
    width: 40px;
    height: 40px;
    border-radius: 50%;
  `}

  &:active {
    background-color: ${(props) => props.theme.darkSuccess};
  }
`;

export default Button;
