import { useEffect, useState } from "react";
import { CardChat, Spinner, Text } from "../../components";
import Message from "./message";
import API from "../../services/api";
import { AxiosError } from "axios";
import { ErrorBack } from "../../services/type";
import { useNavigate } from "react-router-dom";
import { UserI } from "../../types";

const ListContact = () => {
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(true);
  const [list, setList] = useState([]);

  const getAllContacts = async () => {
    setIsloading(true);

    try {
      const { data } = await API.get(`/user/list`);
      setList(data);
    } catch (err) {
      const error = err as AxiosError;
      const errorBack = error.response?.data as ErrorBack;
      alert(errorBack.message);
    } finally {
      setIsloading(false);
    }
  };

  const saveChat = async (uid: string) => {
    const userStr = sessionStorage.getItem("user");
    const user = userStr && JSON.parse(userStr);

    const payload = {
      participants: [user._id, uid],
      message: [],
    };
    setIsloading(true);

    try {
      const { data } = await API.post("/chat", payload);
      navigate(`/chat/${data[0]._id}`);
    } catch (err) {
      const error = err as AxiosError;
      const errorBack = error.response?.data as ErrorBack;
      alert(errorBack.message);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (list.length > 0) {
    return (
      <>
        <Text>Contactos</Text>

        {list.map((contact: UserI, index) => {
          return (
            <CardChat
              key={index}
              author={contact.name}
              description={contact.email}
              image={`https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${index}`}
              onClick={() => {
                saveChat(contact._id);
              }}
            />
          );
        })}
      </>
    );
  }
  return <Message />;
};

export default ListContact;
