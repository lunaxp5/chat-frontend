import { useCallback, useEffect, useState } from "react";
import NoChats from "./no-chats";
import API from "../services/api";
import { AxiosError } from "axios";
import { ErrorBack } from "../services/type";
import { ChatI, MessageI, UserI } from "../types";
import Spinner from "./spinner";
import CardChat from "./card-chat";
import { useNavigate } from "react-router-dom";

interface ListChatProps {
  onClick: () => void;
}
const ListChat = ({ onClick }: ListChatProps) => {
  const navigate = useNavigate();
  const [chats, setChats] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [user, setUser] = useState<UserI>();

  const getList = async (uid: string) => {
    setIsloading(true);
    try {
      const { data } = await API.get(`chat/user/${uid}`);

      setChats(data);
    } catch (err) {
      const error = err as AxiosError;
      const errorBack = error.response?.data as ErrorBack;
      alert(errorBack.message);
    } finally {
      setIsloading(false);
    }
  };
  const removeChat = async (chatId: string) => {
    setIsloading(true);
    try {
      await API.delete(`chat/${chatId}`);
      user && getList(user?._id);
    } catch (err) {
      const error = err as AxiosError;
      const errorBack = error.response?.data as ErrorBack;
      alert(errorBack.message);
    } finally {
      setIsloading(false);
    }
  };

  const getReceiverName = (participants: UserI[]) => {
    const contact = participants.filter((contact) => contact._id !== user?._id);
    return contact[0].name;
  };
  const lastMessage = (messages: MessageI[]) => {
    if (messages.length > 0) {
      const last = messages.length - 1;
      return messages[last].description;
    }
    return "";
  };
  const lastTimeMessage = (messages: MessageI[]) => {
    if (messages.length > 0) {
      const last = messages.length - 1;
      return messages[last].timestamp;
    }
    return undefined;
  };
  const messageNoReads = (messages: MessageI[]) => {
    let count = 0;
    messages.forEach((message) => {
      if (!message.read) {
        count++;
      }
    });

    return count;
  };
  const goToChat = (chatId: string) => {
    navigate(`/chat/${chatId}`);
  };
  useEffect(() => {
    const userStr = sessionStorage.getItem("user");
    const userData = userStr && JSON.parse(userStr);
    setUser(userData);

    userData && getList(userData._id);
  }, []);

  if (isLoading) {
    return <Spinner page />;
  }
  if (chats.length > 0) {
    return (
      <>
        {chats?.map((chat: ChatI, index: number) => {
          return (
            <CardChat
              key={index}
              author={getReceiverName(chat.participants as UserI[])}
              description={lastMessage(chat.messages)}
              lastMessage={lastTimeMessage(chat.messages)}
              noRead={messageNoReads(chat.messages)}
              image={`https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${index}`}
              onClick={() => {
                goToChat(chat._id);
                onClick && onClick();
              }}
              onRemove={() => {
                removeChat(chat._id);
              }}
            />
          );
        })}
      </>
    );
  }
  return <NoChats />;
};

export default ListChat;
