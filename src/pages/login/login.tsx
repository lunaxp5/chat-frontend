import React from "react";
import styled from "styled-components";
import { Button, Input, Logo } from "../../components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

const Login = () => {
  return (
    <Wrapper>
      <Form>
        <Logo />
        <Input placeholder="Introduce tu nombre" />
        <Input placeholder="Introduce tu correo" />
        <Button>Ingresar</Button>
      </Form>
    </Wrapper>
  );
};

export default Login;
