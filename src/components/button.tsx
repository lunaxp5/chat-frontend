import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import Spinner from "./spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  rounded?: boolean;
  children: ReactNode | ReactNode[];
  isLoading?: boolean;
}

const ButtonStyled = styled.button`
  cursor: pointer;
  width: 250px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin: 8px;
  color: ${(props) => props.theme.lightText};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.lightSuccess : theme.success};
  border: none;

  &:active {
    ${({ disabled, theme }) =>
      !disabled &&
      `
      background-color: ${theme.darkSuccess};
    `}
  }
`;

const ButtonRounded = styled(ButtonStyled)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Button = ({ rounded, children, isLoading, ...rest }: ButtonProps) => {
  if (rounded) {
    return <ButtonRounded {...rest}>{children}</ButtonRounded>;
  }
  return (
    <ButtonStyled {...rest} disabled={isLoading}>
      {isLoading ? <Spinner /> : children}
    </ButtonStyled>
  );
};

export default Button;
