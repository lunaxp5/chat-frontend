import React from "react";
import styled, { keyframes } from "styled-components";
import { Button, Input, Logo } from "../../components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const Form = styled.div`
  width: 328px;
  height: 316px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgcontainer};
  border-radius: 16px;
  padding: 8px;
  box-sizing: border-box;
  animation: 0.5s ${fadeIn} ease-in;
`;

const Login = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <Wrapper>
      <Form>
        <Logo />
        <Input placeholder="Introduce tu nombre" />
        <Input placeholder="Introduce tu correo" />
        <Button onClick={() => goToHome()}>Ingresar</Button>
      </Form>
    </Wrapper>
  );
};

export default Login;
