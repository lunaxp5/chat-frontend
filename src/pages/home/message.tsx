import { AiOutlineGlobal } from "react-icons/ai";
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
const Icon = styled(AiOutlineGlobal)`
  font-size: 60px;
  color: ${({ theme }) => theme.iconColor};
`;

const Message = () => {
  return (
    <Wrapper>
      <Content>
        <Icon />
        <Text $align="center">
          En Blabber puedes conectar con muchas personas
        </Text>
      </Content>
    </Wrapper>
  );
};
export default Message;
