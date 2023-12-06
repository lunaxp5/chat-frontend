import { IoIosPeople } from "react-icons/io";
import { styled } from "styled-components";
import { Text } from "../../components";

const Wrapper = styled.div`
  margin-top: 128px;
  padding-top: 24px;
  box-sizing: border-box;
  max-width: 220px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Icon = styled(IoIosPeople)`
  font-size: 60px;
  color: ${({ theme }) => theme.iconColor};
`;

const Message = () => {
  return (
    <Wrapper>
      <Content>
        <Icon />
        <Text align="center">No hay contactos aún, vuelve más tarde.</Text>
      </Content>
    </Wrapper>
  );
};
export default Message;
