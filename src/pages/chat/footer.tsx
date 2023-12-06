import { styled } from "styled-components";
import { Button, Input } from "../../components";
import { IoIosSend } from "react-icons/io";

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

const Footer = () => {
  return (
    <Wrapper>
      <Input placeholder="Escribir aquí" />
      <Button rounded>
        <Icon />
      </Button>
    </Wrapper>
  );
};

export default Footer;
