import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  rounded?: boolean;
  children: ReactNode | ReactNode[];
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
  background-color: ${(props) => props.theme.success};
  border: none;

  &:active {
    background-color: ${(props) => props.theme.darkSuccess};
  }
`;

const ButtonRounded = styled(ButtonStyled)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Button = ({ rounded, children, ...rest }: ButtonProps) => {
  if (rounded) {
    return <ButtonRounded {...rest}>{children}</ButtonRounded>;
  }
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};

export default Button;
