import React from "react";
import { MdMessage } from "react-icons/md";
import { styled } from "styled-components";
import Text from "./text";

const Wrapper = styled.div`
  width: 100%;
  padding-top: 24px;
  box-sizing: border-box;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Icon = styled(MdMessage)`
  font-size: 60px;
  color: ${({ theme }) => theme.iconColor};
`;

const NoChats = () => {
  return (
    <Wrapper>
      <Content>
        <Icon />
        <Text>No tienes chats Aún...</Text>
      </Content>
    </Wrapper>
  );
};
export default NoChats;
