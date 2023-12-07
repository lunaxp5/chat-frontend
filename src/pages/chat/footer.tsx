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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onClick(msg);
      setMsg("");
    }
  };

  return (
    <Wrapper>
      <Input
        value={msg}
        placeholder="Escribir aquí"
        onChange={(e) => {
          setMsg(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <Button
        rounded
        onClick={() => {
          onClick(msg);
          setMsg("");
        }}
      >
        <Icon />
      </Button>
    </Wrapper>
  );
};

export default Footer;
