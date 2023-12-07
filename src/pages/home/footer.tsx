import { styled } from "styled-components";
import { Button } from "../../components";
import { LuMessageSquarePlus } from "react-icons/lu";

import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
`;
const Icon = styled(LuMessageSquarePlus)`
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
