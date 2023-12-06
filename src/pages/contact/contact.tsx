import { styled } from "styled-components";
import Message from "./message";
import Header from "./header";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Contact = () => {
  return (
    <Wrapper>
      <Header />
      <Message />
    </Wrapper>
  );
};
export default Contact;
