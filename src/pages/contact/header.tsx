import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { MdChevronLeft } from "react-icons/md";

const Wrapper = styled.div`
  height: 40px;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bgcontainer};
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
`;

const GoBack = styled(Link)`
  color: ${({ theme }) => theme.info};
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Icon = styled(MdChevronLeft)`
  font-size: 18px;
  color: ${({ theme }) => theme.info};
`;

const Header = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <GoBack to={location.state?.from || "/"}>
        <Icon />
        Atrás
      </GoBack>
    </Wrapper>
  );
};

export default Header;
