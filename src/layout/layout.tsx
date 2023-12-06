import React from "react";
import { Menu, SideBar } from "../components";
import styled from "styled-components";
import useToggle from "../hook/useToggle";
import { Outlet } from "react-router-dom";
import ListChats from "../components/list-chats";
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
        <ListChats />
      </SideBar>
      <Outlet />
    </Wrapper>
  );
};
export default Layout;
