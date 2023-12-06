import React from "react";
import styled from "styled-components";
import Input from "./input";
import { MdClear } from "react-icons/md";

interface SidebarStyle {
  open: boolean;
}
interface SidebarProps extends SidebarStyle {
  children?: React.ReactNode | React.ReactNode[];
  onClose: () => void;
  search?: boolean;
}

const Sidebar = styled.div<SidebarStyle>`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background: ${({ theme }) => theme.bgcontainer};
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  padding: 8px;
  box-sizing: border-box;
  border-right: 1px solid #d6d6d6;
  z-index: 100;
`;

const Icon = styled(MdClear)`
  color: ${({ theme }) => theme.dark};
`;

const Header = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SideBar = ({ open, onClose, children, search }: SidebarProps) => {
  return (
    <Sidebar open={open}>
      <Header>
        <Icon
          onClick={() => {
            onClose();
          }}
        />
      </Header>
      {search && <Input placeholder="Buscar..." />}
      {children}
    </Sidebar>
  );
};

export default SideBar;
