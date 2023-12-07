import styled from "styled-components";
import Text from "./text";

interface MessageProps {
  author: string;
  time: Date;
  description: string;
  sender?: boolean;
}
interface ContentStyle {
  $sender?: boolean;
}

const Title = styled(Text)`
  font-size: 12px;
  margin: 0;
`;
const Description = styled(Text)`
  font-size: 14px;
  margin: 0;
`;

const Header = styled.div`
  width: 250px;
`;

const Wrapper = styled.div<ContentStyle>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ $sender }) => ($sender ? "flex-end" : "flex-start")};
  min-height: 20px;
  margin-top: 16px;
`;
const Content = styled.div<ContentStyle>`
  width: 250px;
  min-height: 80px;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 16px;
  background-color: ${({ theme, $sender }) =>
    $sender ? theme.info : theme.bgcontainer};
`;

const Message = ({ author, time, description, sender }: MessageProps) => {
  return (
    <Wrapper $sender={sender}>
      <Header>
        <Title $align={sender ? "right" : "left"}>
          {sender ? "Tú" : author} {new Date(time).toLocaleTimeString()}
        </Title>
      </Header>
      <Content $sender={sender}>
        <Description color={sender ? "lightText" : "dark"}>
          {description}
        </Description>
      </Content>
    </Wrapper>
  );
};

export default Message;
