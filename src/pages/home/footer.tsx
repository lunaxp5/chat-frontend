import { styled } from "styled-components";
import { Button } from "../../components";
import { MdMessage } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
`;
const Icon = styled(MdMessage)`
  font-size: 24px;
  color: ${({ theme }) => theme.lightText};
`;

const Footer = () => {
  const navigate = useNavigate();
  const goToContact = () => {
    navigate("/contact");
  };
  return (
    <Wrapper>
      <Button rounded onClick={() => goToContact()}>
        <Icon />
      </Button>
    </Wrapper>
  );
};

export default Footer;
