import { styled } from "styled-components";
import Header from "./header";
import Message from "../../components/message";
import Footer from "./footer";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Content = styled.div`
  padding: 8px 4px;
  overflow-y: scroll;
`;
const MsgList = [
  {
    sender: { $oid: "656f4b9ba5d66e4c5c1dfab5" },
    receiver: { $oid: "656f52e31af0ab214b1cca6f" },
    description: "Mensaje 1",
    read: false,
    deleted: false,
    _id: { $oid: "656f9344a50cd19426f9102e" },
    timestamp: new Date(),
  },
  {
    sender: { $oid: "656f4b9ba5d66e4c5c1dfab5" },
    receiver: { $oid: "656f52e31af0ab214b1cca6f" },
    description: "Mensaje 3",
    read: false,
    deleted: false,
    _id: { $oid: "656f9350a50cd19426f91037" },
    timestamp: new Date(),
  },
];

const Chat = () => {
  return (
    <Wrapper>
      <Header />

      <Content>
        <Message
          author={"Jose Luna"}
          description={"Hola que tal como estas?"}
          time={new Date()}
        />
        <Message
          author={"Jose Luna"}
          description={"Hola que tal como estas?"}
          time={new Date()}
        />
        <Message
          author={"Jose Luna"}
          description={"Hola que tal como estas?"}
          time={new Date()}
        />
        <Message
          author={"Jose Luna"}
          description={"Hola que tal como estas?"}
          time={new Date()}
        />
        {MsgList.map((item, index) => {
          return (
            <Message
              key={index}
              sender
              author={"Jose Luna"}
              description={item.description}
              time={item.timestamp}
            />
          );
        })}
      </Content>
      <Footer />
    </Wrapper>
  );
};
export default Chat;
