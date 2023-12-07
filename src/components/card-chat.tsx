import { styled } from "styled-components";
import Text from "./text";
import Dropdown from "./dropdown";

interface CardProps {
  author: string;
  description?: string;
  image?: string;
  noRead?: number;
  lastMessage?: Date;
  onClick?: () => void;
  onRemove?: () => void;
}

const Wrapper = styled.div`
  width: 100%;
  height: 94px;
  display: flex;
  background-color: ${({ theme }) => theme.bgcontainer};
  border-bottom: 1px solid #d6d6d6;
  position: relative;
`;
const Pressable = styled.div`
  display: flex;
`;

const ImgWrapper = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4px;
`;
const Img = styled.img`
  width: 50px;
  object-fit: contain;
  border-radius: 50%;
  border: 1px solid #d6d6d6;
`;

const Content = styled.div`
  width: 156px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Action = styled.div`
  height: 100%;
  width: 77px;
  display: flex;
  align-items: center;
`;

const CardText = styled(Text)`
  font-size: 12px;
  margin: 4px;
`;
const TagText = styled(Text)`
  font-size: 11px;
  margin: 0px;
`;

const TimeText = styled(Text)`
  font-size: 12px;
  margin: 4px;
  position: absolute;
  right: 4px;
  top: 4px;
`;

const Tag = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.danger};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardChat = ({
  author,
  description,
  image,
  noRead = 0,
  lastMessage,
  onClick,
  onRemove,
}: CardProps) => {
  const truncateText = (text: string, length: number) => {
    if (text.length <= length) {
      return text.replace(/\s/g, " ");
    }
    return text.replace(/\s/g, " ").slice(0, length) + "...";
  };

  return (
    <Wrapper>
      <Pressable
        onClick={() => {
          onClick && onClick();
        }}
      >
        <TimeText>
          {lastMessage && new Date(lastMessage).toLocaleTimeString()}
        </TimeText>
        <ImgWrapper>
          <Img src={image} alt="img-chat" />
        </ImgWrapper>
        <Content>
          <CardText color="dark">{truncateText(author, 12)}</CardText>
          <CardText>{description && truncateText(description, 23)}</CardText>
        </Content>
      </Pressable>
      <Action>
        {noRead > 1 && (
          <Tag>
            <TagText color="lightText">{noRead > 9 ? "9+" : noRead}</TagText>
          </Tag>
        )}
        <Dropdown>
          <div
            onClick={() => {
              onRemove && onRemove();
            }}
          >
            <Text color="dark">Eliminar</Text>
          </div>
        </Dropdown>
      </Action>
    </Wrapper>
  );
};

export default CardChat;
