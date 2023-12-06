import React from "react";
import { Menu, SideBar } from "../components";
import styled from "styled-components";
import NoChats from "../components/no-chats";
import useToggle from "../hook/useToggle";
import { Outlet } from "react-router-dom";
interface Props {
  children?: React.ReactNode | React.ReactNode[];
}
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.body};
`;
const Layout = ({ children }: Props) => {
  const [open, setOpen] = useToggle();

  return (
    <Wrapper>
      <Menu onClick={() => setOpen()} />
      <SideBar
        open={open}
        search
        onClose={() => {
          setOpen();
        }}
      >
        <NoChats />
      </SideBar>
      <Outlet />
    </Wrapper>
  );
};
export default Layout;
