import { styled } from "styled-components";
import Header from "./header";
import Message from "../../components/message";
import Footer from "./footer";
import { useCallback, useEffect, useState } from "react";
import API from "../../services/api";
import { AxiosError } from "axios";
import { ErrorBack } from "../../services/type";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components";
import { ChatI, MessageI, UserI } from "../../types";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Content = styled.div`
  height: 100%;
  padding: 8px 4px;
  overflow-y: scroll;
`;

const Chat = () => {
  const [isLoading, setIsloading] = useState(false);
  const [user, setUser] = useState<UserI>();
  const [chat, setChat] = useState<ChatI>();
  const { chatId } = useParams();

  const getReceiverId = () => {
    const search = chat?.participants as string[];
    const receiver = search.filter((uid: string) => user && uid !== user._id);
    if (receiver && receiver?.length > 0) {
      return receiver[0];
    }
    return null;
  };

  const sendMessage = async (msg: string) => {
    setIsloading(true);
    const receiver = getReceiverId();
    const sender = user && user._id;
    const payload = {
      sender,
      receiver,
      description: msg,
    };
    try {
      const { data } = await API.post(`/chat/${chatId}/message`, payload);
      setChat(data);
    } catch (err) {
      const error = err as AxiosError;
      const errorBack = error.response?.data as ErrorBack;
      alert(errorBack.message);
    } finally {
      setIsloading(false);
    }
  };

  const getChat = useCallback(async () => {
    setIsloading(true);
    try {
      const { data } = await API.get(`/chat/${chatId}`);
      setChat(data);
    } catch (err) {
      const error = err as AxiosError;
      const errorBack = error.response?.data as ErrorBack;
      alert(errorBack.message);
    } finally {
      setIsloading(false);
    }
  }, [chatId]);

  const isSender = (uidFromMsg: string) => {
    const userStr = sessionStorage.getItem("user");
    const user = userStr && JSON.parse(userStr);

    if (user) {
      return user._id === uidFromMsg;
    }
    return false;
  };

  useEffect(() => {
    const userStr = sessionStorage.getItem("user");
    const userData = userStr && JSON.parse(userStr);
    setUser(userData);

    getChat();
  }, [getChat]);
  return (
    <Wrapper>
      <Header />
      <Content>
        {isLoading ? (
          <Spinner page />
        ) : (
          chat?.messages.map((item: MessageI, index) => {
            return (
              <Message
                key={index}
                sender={isSender(item.sender._id)}
                author={item.receiver.name}
                description={item.description}
                time={item.timestamp}
              />
            );
          })
        )}
      </Content>
      <Footer
        onClick={(msg) => {
          sendMessage(msg);
        }}
      />
    </Wrapper>
  );
};
export default Chat;
