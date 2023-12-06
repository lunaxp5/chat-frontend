import React from "react";
import styled from "styled-components";
import Input from "./Input";

interface SidebarProps {
  open: boolean;
  children?: React.ReactNode | React.ReactNode[];
}

const Sidebar = styled.div<SidebarProps>`
  position: fixed;
  width: 250px;
  height: 100%;
  background: ${({ theme }) => theme.bgcontainer};
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  padding: 8px;
  box-sizing: border-box;
`;

const SideBar = ({ open, children }: SidebarProps) => {
  return (
    <Sidebar open={open}>
      <Input placeholder="Buscar..." />
      {children}
    </Sidebar>
  );
};

export default SideBar;
