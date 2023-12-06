import React, { useState } from "react";
import styled from "styled-components";

interface DropDownProps {
  children: React.ReactNode | React.ReactNode[];
}
interface DropDownStyle {
  isOpen: boolean;
}
const DropdownButton = styled.button`
  font-size: 24px;
  background: none;
  border: none;
`;

const DropdownMenu = styled.div<DropDownStyle>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
`;

const Dropdown = ({ children }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>⋮</DropdownButton>
      <DropdownMenu isOpen={isOpen}>{children}</DropdownMenu>
    </div>
  );
};

export default Dropdown;
