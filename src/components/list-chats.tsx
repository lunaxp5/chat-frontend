import NoChats from "./no-chats";

const ListChat = () => {
  const list = [];
  if (list.length > 0) {
    return (
      <p>Si hay</p>
      // <CardChat />
    );
  }
  return <NoChats />;
};

export default ListChat;
