import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, SideBar } from "../components";
import styled from "styled-components";
interface Props {
  children: React.ReactNode | React.ReactNode[];
}
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.body};
`;
const Layout = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <div>{/* Aquí puedes poner tu menú superior */}</div>
      <SideBar open={open}>
        {/* Aquí puedes poner tu barra lateral */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </SideBar>
      <Button onClick={() => setOpen(!open)}>Open</Button>
      <div>{children}</div>
    </Wrapper>
  );
};
export default Layout;
