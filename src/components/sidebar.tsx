import React from "react";
import styled from "styled-components";
import Input from "./input";
import { MdClear } from "react-icons/md";
import Text from "./text";
import { useNavigate } from "react-router-dom";

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
  width: 300px;
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
  border-bottom: 1px solid #d6d6d6;
  margin-bottom: 16px;
`;
const Footer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.bginput};
  align-items: center;
  padding: 0px 8px;
  box-sizing: border-box;
`;

const SideBar = ({ open, onClose, children, search }: SidebarProps) => {
  const navigate = useNavigate();
  const LogOut = () => {
    sessionStorage.removeItem("user");
    navigate("/login");
  };
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
      <Footer>
        <Text onClick={() => LogOut()} color="info">
          Cerrar sesión
        </Text>
      </Footer>
    </Sidebar>
  );
};

export default SideBar;
