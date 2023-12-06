import { styled } from "styled-components";
import Message from "./message";
import Footer from "./footer";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Home = () => {
  return (
    <Wrapper>
      <Message />
      <Footer />
    </Wrapper>
  );
};
export default Home;
