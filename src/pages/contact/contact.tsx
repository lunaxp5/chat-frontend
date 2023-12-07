import { styled } from "styled-components";
import Header from "./header";
import ListContact from "./list-contact";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Contact = () => {
  return (
    <Wrapper>
      <Header />
      <ListContact />
    </Wrapper>
  );
};
export default Contact;
