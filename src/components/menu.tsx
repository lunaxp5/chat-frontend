import { styled } from "styled-components";
import { MdMenu } from "react-icons/md";

interface MenuProps {
  onClick: () => void;
}

const Wrapper = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 24px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bgcontainer};
  border-bottom: 1px solid #d6d6d6;
`;
const Icon = styled(MdMenu)`
  font-size: 32px;
  color: ${({ theme }) => theme.dark};
`;

const Menu = ({ onClick }: MenuProps) => {
  return (
    <Wrapper>
      <Icon onClick={() => onClick()} />
    </Wrapper>
  );
};

export default Menu;
