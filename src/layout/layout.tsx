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
const Content = styled.div`
  height: calc(100% - 100px);
  overflow-y: scroll;
`;
const Layout = ({ children }: Props) => {
  const [open, setOpen] = useToggle();

  return (
    <Wrapper>
      <Menu onClick={() => setOpen()} />
      <SideBar
        open={open}
        onClose={() => {
          setOpen();
        }}
      >
        <Content>
          <ListChats
            onClick={() => {
              setOpen();
            }}
          />
        </Content>
      </SideBar>
      <Outlet />
    </Wrapper>
  );
};
export default Layout;
