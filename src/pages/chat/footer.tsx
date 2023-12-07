import { styled } from "styled-components";
import { Button, Input } from "../../components";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";

interface FooterI {
  onClick: (e: string) => void;
}

const Wrapper = styled.div`
  height: 80px;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bgcontainer};
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* position: absolute;
  bottom: 0;
  left: 0; */
`;

const Icon = styled(IoIosSend)`
  font-size: 24px;
  color: ${({ theme }) => theme.lightText};
`;

const Footer = ({ onClick }: FooterI) => {
  const [msg, setMsg] = useState("");
  return (
    <Wrapper>
      <Input
        placeholder="Escribir aquí"
        onChange={(e) => {
          setMsg(e.target.value);
        }}
      />
      <Button
        rounded
        onClick={() => {
          onClick(msg);
        }}
      >
        <Icon />
      </Button>
    </Wrapper>
  );
};

export default Footer;
